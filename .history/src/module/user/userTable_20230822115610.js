import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import Table from "../../components/table/Table";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";

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
      setUserList(results);
    });
  }, []);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Info</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Status</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.}</td>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.status}</td>
              <td>{item.role}</td>
              <td><div className="flex items-center gap-x-3">
                <ActionView></ActionView>
                <ActionEdit
                // onClick={() => {
                //   navigate(`/manage/update-category?id=${item.id}`);
                // }}
                ></ActionEdit>
                <ActionDelete
                // onClick={() => {
                //   handleDeleteCategory(item.id);
                // }}
                ></ActionDelete>
              </div></td>
            </tr>
          ))}
          
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
