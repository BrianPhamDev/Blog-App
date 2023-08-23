import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

const UserTable = () => {
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
  return <div></div>;
};

export default UserTable;
