import React from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const DashboardLayout = ({ children }) => {
  return (
    <div className="container my-auto">
      <DashboardHeader></DashboardHeader>
      <div className="dashboard-main grid grid-cols-[300px]">
        <Sidebar>Sidebar</Sidebar>
        <div className="dashboard-children">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
