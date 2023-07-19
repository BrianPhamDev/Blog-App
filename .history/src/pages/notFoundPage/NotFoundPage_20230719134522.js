import React from "react";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="container flex flex-col h-screen justify-center items-center gap-8">
      <NavLink to="/">
        <img src="./Logo.svg" alt="Newsiten" className="header-logo" />
      </NavLink>

      <NavLink to="/" className="">
        <h1 className="font-bold text-gradient text-7xl py-4">
          Opps! Page not found!
        </h1>
      </NavLink>
      <NavLink className="" to="/">
        <button className="w-[220px] menu-button ">Back to Home</button>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
