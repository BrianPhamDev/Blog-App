import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";

const CategoryManage = () => {
  return (
    <div>
      <div className="flex">
        <DashboardHeading>Categories</DashboardHeading>
        <Button to="/manage/add-category">Create category</Button>
      </div>
    </div>
  );
};

export default CategoryManage;
