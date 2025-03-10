import { useEffect, useContext, useState, createContext } from "react";

const CategoryContext = createContext();

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
  const [mealCategories, setmealCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function displayMeals(category) {
    setSelectedCategory(category);
    setLoading(true);
    setSearchTerm("")
  }

  return (
    <CategoryContext.Provider
      value={{
        mealCategories,
        setmealCategories,
        selectedCategory,
        setSelectedCategory,
        displayMeals,
        handleSearchChange,
        loading,
        setLoading,
        searchTerm, 
        setSearchTerm,
        selectedMeals,
        setSelectedMeals
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
