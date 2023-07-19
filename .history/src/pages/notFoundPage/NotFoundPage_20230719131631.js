import React from "react";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="container">
      <NavLink to="/">
        <img src="./Logo.svg" alt="Newsiten" className="header-logo" />
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
