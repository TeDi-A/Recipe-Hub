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
      <h1 className="site-header-text">RecipeHub</h1>
      <div className="underline"></div>
    </div>
  );
};

export default SiteHeader;
