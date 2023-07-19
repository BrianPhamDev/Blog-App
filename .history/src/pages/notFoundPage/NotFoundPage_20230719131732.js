import React from "react";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="container flex items-center">
      <NavLink to="/" className="">
        <img src="./Logo.svg" alt="Newsiten" className="header-logo" />
        <h1 className="heading-1">Opps! Page not found!</h1>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
