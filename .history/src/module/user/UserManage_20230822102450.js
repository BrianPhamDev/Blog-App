import React, { useEffect, useState } from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { db } from "../../firebase/firebase-config";
import { collection } from "firebase/firestore";

const UserManage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(async () => {
    const colRef = collection(db);
  }, []);
  return (
    <div>
      <DashboardHeading>Users</DashboardHeading>
    </div>
  );
};

export default UserManage;
