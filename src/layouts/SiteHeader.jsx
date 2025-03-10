import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../contexts/CategoryContext";


const SiteHeader = () => {
  const { setLoading, setSearchTerm } = useCategoryContext();
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate("/");
    setLoading(false);
    setSearchTerm("");
  };
  return (
    <div className="site-header" onClick={handleHeaderClick}>
      <h1>RecipeHub</h1>
    </div>
  );
};

export default SiteHeader;
