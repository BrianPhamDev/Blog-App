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
                  <td title={item.id}>{item?.id.slice(0, 6) + "..."}</td>
                  <td>
                    <div className="flex item-center gap-x-3">
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
                        alt="avatar"
                        className="w-[42px] h-[42px] rounded-full flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3>{item?.userName}</h3>
                        <time>{new Date().toLocaleDateString()}</time>
                      </div>
                    </div>
                    {item?.info}
                  </td>
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
