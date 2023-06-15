import React from "react";
import "./navbar.css"
const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="app-logo">
        <h2>BookStore CMS</h2>
      </div>
        <ul className="nav-link">
          <li>Books</li>
          <li>CATEGORIES</li>
        </ul>
      <div className="user-logo"></div>
    </div>
  );
};

export default Navigation;
