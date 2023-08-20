import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";

const CategoryManage = () => {
  return (
    <div>
      <DashboardHeading>Categories</DashboardHeading>
      <Button>Create category</Button>
    </div>
  );
};

export default CategoryManage;
