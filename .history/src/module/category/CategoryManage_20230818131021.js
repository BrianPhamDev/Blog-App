import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";

const CategoryManage = () => {
  return (
    <div>
      <div className="flex"></div>
      <DashboardHeading>Categories</DashboardHeading>
      <Button to="/manage/add-category">Create category</Button>
    </div>
  );
};

export default CategoryManage;
