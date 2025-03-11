import { useEffect } from "react";
import { useCategoryContext } from "../contexts/CategoryContext";
import { ArrowRightCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
useNavigate;

const SearchBar = () => {
  const { searchTerm, handleSearchChange, setSelectedMeals, setLoading } =
    useCategoryContext();
  const navigate = useNavigate();

  const fetchMeals = () => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedMeals(data.meals);
        setLoading(false);
        navigate(`/?search=${searchTerm}`);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchMeals();
    }
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar-design"
        type="text"
        name=""
        id=""
        placeholder="Search 'salmon'"
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onChange={() => handleSearchChange(event)}
      />
      {searchTerm.length > 1 && (
        <ArrowRightCircle
          className="enter-search"
          color="#F0B41F"
          size={35}
          onClick={fetchMeals}
        />
      )}
    </div>
  );
};

export default SearchBar;
