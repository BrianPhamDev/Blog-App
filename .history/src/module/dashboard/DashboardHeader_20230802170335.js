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
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          alt="guys-smilling"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
