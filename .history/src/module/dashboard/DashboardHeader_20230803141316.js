import { Button } from "../../components/button";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header-wrapper bg-white p-5 border-b border-b-black flex gap-5 justify-end">
      <Button to="/dashboard" className="dashboard-header-button">
        Write new post
      </Button>
      <div className="dashboard-header-avatar h-[52px] w-[52px]">
        <img
          src="https://images.unsplash.com/photo-1609428079875-ae186c562aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80"
          alt="guys-smilling"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
