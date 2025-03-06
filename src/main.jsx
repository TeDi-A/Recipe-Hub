import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CategoryProvider } from "./contexts/CategoryContext";

// Remove StrictMode
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CategoryProvider>
    <App />
  </CategoryProvider>
);
