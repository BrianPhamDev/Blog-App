import React from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import UserTable from "./userTable";
const UserManage = () => {
  return (
    <div>
      <DashboardHeading>Users</DashboardHeading>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
