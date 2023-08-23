import React, { useEffect, useState } from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
const UserManage = () => {
  return (
    <div>
      <DashboardHeading>Users</DashboardHeading>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
