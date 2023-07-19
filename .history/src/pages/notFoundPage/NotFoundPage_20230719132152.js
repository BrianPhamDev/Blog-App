import React from "react";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="container flex items-center h-screen">
      <NavLink to="/" className="">
        <img src="./Logo.svg" alt="Newsiten" className="header-logo mb-4" />
      </NavLink>
      <h1 className="font-bold text-gradient text-6xl">
        Opps! Page not found!
      </h1>
    </div>
  );
};

export default NotFoundPage;
