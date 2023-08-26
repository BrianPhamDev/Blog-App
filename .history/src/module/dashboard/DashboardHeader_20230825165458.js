import { Button } from "../../components/button";
import React from "react";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header-wrapper bg-white p-5 border-b border-b-black flex gap-5 justify-between">
      <NavLink to="/">
        <img src="./Logo.svg" alt="Newsiten" className="header-logo" />
      </NavLink>

      <div className="">
        <Button
          to="/dashboard"
          type="button"
          className="dashboard-header-button"
        >
          Write new post
        </Button>
        <NavLink
          to="/profile"
          className="dashboard-header-avatar h-[52px] w-[52px]"
        >
          <img
            src="https://images.unsplash.com/photo-1622124549569-734d5a66859d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE1fHxicmFuZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="guys-smilling"
            className="w-full h-full object-cover rounded-full"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardHeader;
