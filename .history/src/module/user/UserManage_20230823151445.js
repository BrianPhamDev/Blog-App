import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import UserTable from "./UserTable";

const UserManage = () => {
  return (
    <div>
      <DashboardHeading>Users</DashboardHeading>
      <div className="w-fit mb-6">
        <Button type="button" to="/manage/add-category" kind="secondary">
          Create category
        </Button>
      </div>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
