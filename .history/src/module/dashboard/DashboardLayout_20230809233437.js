import React from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";
const DashboardLayout = ({ children }) => {
  const { userInfo } = useAuth();
  console.log(userInfo);
  if (!userInfo) return <NotFoundPage></NotFoundPage>;

  return (
    <div className="container">
      <DashboardHeader></DashboardHeader>
      <div className="dashboard-main grid grid-cols-dashboard-main mt-8 gap-8">
        <Sidebar>Sidebar</Sidebar>
        <div className="dashboard-children">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
