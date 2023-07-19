import React from "react";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="container flex items-center h-screen">
      <NavLink to="/" className="">
        <h1 className="heading-1">Opps! Page not found!</h1>
        <img src="./Logo.svg" alt="Newsiten" className="header-logo" />
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
