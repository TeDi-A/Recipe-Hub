import { useEffect, useContext, useState, createContext } from "react";

const CategoryContext = createContext();

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
  const [mealCategories, setmealCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMeals, setSelectedMeals] = useState("");

  function displayMeals(category) {
    setSelectedCategory(category);
  }
  console.log(selectedCategory);

  //   console.log(selectedCategory);

  return (
    <CategoryContext.Provider
      value={{
        mealCategories,
        setmealCategories,
        selectedCategory,
        setSelectedCategory,
        displayMeals
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
