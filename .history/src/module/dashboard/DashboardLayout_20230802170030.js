import React from "react";
import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
