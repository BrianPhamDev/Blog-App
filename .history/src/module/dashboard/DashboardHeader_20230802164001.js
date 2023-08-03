import { Button } from "../../components/button";
import React from "react";
import styled from "styled-components";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header-wrapper bg-white p-5 border border-b-black flex gap-5 justify-end">
      <Button to="/dashboard" className="dashboard-header-button">
        Write new post
      </Button>
      <div className="dashboard-header-avatar">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          alt="guys-smilling"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
