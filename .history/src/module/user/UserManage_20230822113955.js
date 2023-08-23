import React, { useEffect, useState } from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { db } from "../../firebase/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { orderBy } from "lodash";

const UserManage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "users");
    onSnapshot(colRef, (snapshot) => {
      let results = [];
      snapshot.forEach((item) => {
        results.push({
          id: item.id,
          ...item.data(),
        });
      });
      // console.log(snapshot.docs[0].data());
      console.log(results);
    });
  }, []);
  return (
    <div>
      <DashboardHeading>Users</DashboardHeading>
    </div>
  );
};

export default UserManage;
