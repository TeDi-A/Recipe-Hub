import { React, useEffect, useState } from "react";
import { useCategoryContext } from "../contexts/CategoryContext";

const Content = () => {
  const [selectedMeals, setSelectedMeals] = useState([]);
  const { selectedCategory } = useCategoryContext();

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.meals);
        setSelectedMeals(data.meals);
      });
  }, [selectedCategory]);

  console;

  return (
    <div className="content">
      {selectedMeals &&
        selectedMeals.map((meal) => (
          <div className="meal-item" key={meal.idMeal}>
            <img className="meal-item-img" src={meal.strMealThumb} alt="" />
            <div>{meal.strMeal}</div>
          </div>
        ))}
    </div>
  );
};

export default Content;
