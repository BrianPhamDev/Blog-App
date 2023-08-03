import { Button } from "../../components/button";
import React from "react";
import styled from "styled-components";

const DashboardHeader = () => {
  return (
    <div className="dashboard-wrapper">
      <Button to="/dashboard" className="dashboard-button" height="52px">
        Write new post
      </Button>
      <div className="dashboard-avatar">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
