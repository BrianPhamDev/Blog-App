import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import UserTable from "./UserTable";
import { Button } from "../../components/button";

const UserManage = () => {
  return (
    <div>
      <DashboardHeading>Users</DashboardHeading>
      <div className="w-fit mb-6">
        <Button type="button" to="/manage/add-user" kind="secondary">
          Create new user
        </Button>
      </div>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
