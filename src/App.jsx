import "./styles/App.css";
import HeroHeader from "./layouts/HeroHeader";
import Sidebar from "./layouts/Sidebar";
import Content from "./layouts/Content";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <HeroHeader />
      <div className="container">
        <Sidebar />
        <div className="sub-container">
          <SearchBar />
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
