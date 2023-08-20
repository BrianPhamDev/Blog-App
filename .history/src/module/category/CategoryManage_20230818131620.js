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
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>01</th>
            <th>Design Packaging</th>
            <th>
              <span className="italic text-gray-400">Design Packaging</span>
            </th>
            <th>Approved</th>
            <th>Actions</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryManage;