import React from "react";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="container flex flex-col h-screen justify-center items-center">
      <NavLink to="/" className="">
        <img src="./Logo.svg" alt="Newsiten" className="header-logo mb-4" />
        <h1 className="font-bold text-gradient text-7xl py-4">
          Opps! Page not found!
        </h1>
      </NavLink>
      <NavLink className="mt-6" to="/">
        <button className="w-[220px] bg-black text-white rounded-md font-semibold cursor-pointer text-lg h-[50px] flex items-center justify-center">
          Back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
