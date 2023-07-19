import React from "react";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="container flex items-center h-screen">
      <NavLink to="/" className="">
        <img src="./Logo.svg" alt="Newsiten" className="header-logo mb-4" />
        <h1 className="heading-1 text-6xl">Opps! Page not found!</h1>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
