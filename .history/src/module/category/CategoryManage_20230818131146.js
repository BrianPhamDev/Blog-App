import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";
import Table from "../../components/table/Table";

const CategoryManage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <DashboardHeading>Categories</DashboardHeading>
        <Button to="/manage/add-category">Create category</Button>
      </div>
      <Table></Table>
    </div>
  );
};

export default CategoryManage;
