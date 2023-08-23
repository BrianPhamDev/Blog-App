import React, { useState } from "react";
import DashboardHeading from "../dashboard/DashboardHeading";

const UserManage = () => {
  const [userList, setUserList] = useState([]);
  return (
    <div>
      <DashboardHeading>Users</DashboardHeading>
    </div>
  );
};

export default UserManage;
