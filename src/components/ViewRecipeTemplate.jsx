import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ViewRecipeTemplate = ({
  mealImage,
  mealName,
  mealInstructions,
  ingredientsWithMeasures,
}) => {

    const navigate = useNavigate()
  function handleBackClick() {
    console.log("Clicked");
    navigate(-1);
  }

  return (
    <div>
      <button className="back-btn" onClick={handleBackClick}>
        <ArrowLeft /> <p className="return">Return</p>
      </button>
      <div className="recipe-name">
        <h1>{mealName}</h1>
      </div>
      <div className="recipe-view">
        <div className="recipe-view-block">
          <img className="recipe-image-view" src={mealImage} alt={mealName} />
          <div className="recipe-view-name">
            <div>
              <h2>Ingredients</h2>
            </div>
            <div>
              {" "}
              <ul>
                {ingredientsWithMeasures.map((item, index) => (
                  <li className="recipe-ingredient-list" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="recipe-details">
          <div className="recipe-instructions">
            <h2>Instructions</h2>
            <p>{mealInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipeTemplate;
