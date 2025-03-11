import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../features/Loading";
import ViewRecipeTemplate from "../components/ViewRecipeTemplate";

const ViewRecipe = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setMeal(data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meal: ", error);
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getIngredientsWithMeasures = (meal) => {
    const ingredientsWithMeasures = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredientsWithMeasures.push(
          `${capitalizeFirstLetter(ingredient)}: ${measure}`
        );
      }
    }

    return ingredientsWithMeasures;
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : meal ? (
        <ViewRecipeTemplate
          mealImage={meal.strMealThumb}
          mealName={meal.strMeal}
          mealInstructions={meal.strInstructions}
          ingredientsWithMeasures={getIngredientsWithMeasures(meal)}
          mealMeasure={meal.strMeasure}
        />
      ) : (
        <div>Error loading meal</div>
      )}
    </div>
  );
};

export default ViewRecipe;
