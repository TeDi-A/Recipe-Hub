import { React, useEffect, useState } from "react";
import { useCategoryContext } from "../contexts/CategoryContext";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Loading from "../features/Loading";
import DefaultMeals from "../features/DefaultMeals";
import { Frown } from "lucide-react";

const Content = () => {
  const { loading, setSelectedMeals, selectedMeals, setLoading, searchTerm } =
    useCategoryContext();
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    const fetchMeals = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setSelectedMeals(data.meals || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchMeals(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
    } else if (category) {
      fetchMeals(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
    } else {
      setSelectedMeals(DefaultMeals);
      setLoading(false);
    }
  }, [category, location.search, setSelectedMeals]);

  function handleMealSelect(meal) {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.strMeal}`
    )
      .then((response) => response.json())
      .then((data) => {
        navigate(`/meal/${meal.idMeal}`)
      });
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : selectedMeals === null ? (
        <div className="no-results">
          Sorry, no meals found <Frown size={35} />
        </div>
      ) : (
        <div className="content">
          {selectedMeals &&
            selectedMeals.map((meal) => (
              <div
                className="meal-item"
                key={meal.idMeal}
                onClick={() => handleMealSelect(meal)}
              >
                <div className="meal-item-img-box">
                  <img
                    className="meal-item-img"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                </div>
                <div className="meal-item-text">{meal.strMeal}</div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Content;
