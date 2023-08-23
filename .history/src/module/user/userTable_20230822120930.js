import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import Table from "../../components/table/Table";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import { useNavigate } from "react-router-dom";

const UserTable = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

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
          {userList.length > 0 &&
            userList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item?.id.slice(0, 8)}</td>
                  <td>{item?.info}</td>
                  <td>{item?.fullName}</td>
                  <td>{item?.email}</td>
                  <td>{item?.status}</td>
                  <td>{item?.role}</td>
                  <td>
                    <div className="flex items-center gap-x-3">
                      <ActionView></ActionView>
                      <ActionEdit
                        onClick={() => {
                          navigate(`/manage/update-user?id=${item.id}`);
                        }}
                      ></ActionEdit>
                      <ActionDelete
                      // onClick={() => {
                      //   handleDeleteCategory(item.id);
                      // }}
                      ></ActionDelete>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
