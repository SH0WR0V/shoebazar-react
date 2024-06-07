import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components";
import { FilterProvider } from "./context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <FilterProvider>
      <ScrollToTop />
      <App />
    </FilterProvider>
  </Router>
);