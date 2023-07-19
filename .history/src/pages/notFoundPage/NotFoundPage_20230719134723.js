import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";
const NotFoundPage = () => {
  return (
    <div className="container">
      <Header></Header>
      <div className="flex flex-col h-screen justify-center items-center gap-8 mb-[50px]">
        <NavLink to="/" className="">
          <h1 className="font-bold text-gradient text-7xl py-4">
            Opps! Page not found!
          </h1>
        </NavLink>
        <NavLink className="" to="/">
          <button className="w-[220px] menu-button ">Back to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
