import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Capitals from "./components/Capitals"
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <Router>
      <nav
        className="navbar 
      navbar-expand-lg 
      bg-warning text-dark
      text-center"
      >
        <Menu />
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/capitals" element={<Capitals />} />
      </Routes>
    </Router>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));
