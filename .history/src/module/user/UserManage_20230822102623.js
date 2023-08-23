import React, { useEffect, useState } from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { db } from "../../firebase/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

const UserManage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "users");
    onSnapshot();
  }, []);
  return (
    <div>
      <DashboardHeading>Users</DashboardHeading>
    </div>
  );
};

export default UserManage;
