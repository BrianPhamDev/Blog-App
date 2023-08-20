import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";
import Table from "../../components/table/Table";
import { LabelStatus } from "../../components/label";

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
            <td>01</td>
            <td>Design Packaging</td>
            <td>
              <span className="italic text-[var(--text-meta)]">
                Design Packaging
              </span>
            </td>
            <td>
              <LabelStatus type="success"></LabelStatus>
            </td>
            <td>
              <div className="flex items-center gap-x-3"></div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryManage;
