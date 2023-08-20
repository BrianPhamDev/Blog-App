import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";

const CategoryManage = () => {
  return (
    <div>
      <DashboardHeading>Categories</DashboardHeading>
      <Button className="w-8">Create category</Button>
    </div>
  );
};

export default CategoryManage;
