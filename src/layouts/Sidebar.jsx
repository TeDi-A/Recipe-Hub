import { React, useEffect, useState } from "react";
import { useCategoryContext } from "../contexts/CategoryContext";
import Loading from "../features/Loading";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [mealCategories, setmealCategories] = useState([]);
  const { displayMeals } = useCategoryContext();
  const [activeCategory, setActiveCategory] = useState("");

  const [isSideBarLoading, setIsSideBarLoading] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setmealCategories(data.categories);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsSideBarLoading(true); 
      });
  }, []);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const category = pathParts[1];
    setActiveCategory(category);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    displayMeals(category);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-title">Categories</div>
      <div>
        {isSideBarLoading ? (
          <Loading />
        ) : (
          <ul className="sidebar-filters">
            {mealCategories.map((category) => (
              <li key={category.idCategory}>
                <Link
                  to={`/${category.strCategory}`}
                  onClick={() => handleCategoryClick(category.strCategory)}
                >
                  <div
                    className={`filter-item ${
                      activeCategory === category.strCategory ? "active" : ""
                    }`}
                  >
                    <img
                      className="filter-item-image"
                      src={`${category.strCategoryThumb}`}
                      alt=""
                    />
                    {category.strCategory}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
