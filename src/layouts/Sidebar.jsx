import { React, useEffect, useState } from "react";
import { useCategoryContext } from "../contexts/CategoryContext";

const Sidebar = () => {
  const [mealCategories, setmealCategories] = useState([]);
  const { displayMeals } = useCategoryContext();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setmealCategories(data.categories);
      });
  }, []);

  return (
    <>
      <ul className="sidebar">
        {mealCategories.map((category) => (
          <li
            onClick={() => displayMeals(category.strCategory)}
            className="filter-item"
            key={category.idCategory}
          >
            <img
              className="filter-item-image"
              src={`${category.strCategoryThumb}`}
              alt=""
            />
            {category.strCategory}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
