import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Content from "./layouts/Content";
import HeroHeader from "./layouts/HeroHeader";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";
import Footer from "./layouts/Footer";
import SiteHeader from "./layouts/SiteHeader";
import ViewRecipe from "./layouts/ViewRecipe";

const App = () => {
  return (
    <Router>
      <SiteHeader />
      <HeroHeader />
      <div className="container">
        <Sidebar />
        <div className="sub-container">
          <SearchBar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/:category" element={<Content />} />
            <Route path="/meal/:id" element={<ViewRecipe />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
