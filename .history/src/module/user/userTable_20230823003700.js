import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import Table from "../../components/table/Table";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import { useNavigate } from "react-router-dom";
import { LabelStatus } from "../../components/label";
import { userStatus, userRole } from "../../utils/constants";

const UserTable = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  const renderUserStatus = (status) => {
    switch (status) {
      case userStatus.ACTIVE:
        return <LabelStatus type="success">Active</LabelStatus>;
      case userStatus.PENDING:
        return <LabelStatus type="warning">Pending</LabelStatus>;
      case userStatus.BAN:
        return <LabelStatus type="danger">Rejected</LabelStatus>;
      default:
        break;
    }
  };
  const renderRoleLabel = (role) => {
    switch (role) {
      case userRole.ADMIN:
        return "Admin";
      case userRole.MOD:
        return "Moderator";
      case userRole.USER:
        return "User";
      default:
        break;
    }
  };

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
            <th>Username</th>
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
                  <td className="">
                    <div className="flex gap-x-3 items-center">
                      <img
                        src={item.image}
                        alt="avatar"
                        className="w-[42px] h-[42px] rounded-full flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3>{item?.fullName}</h3>
                        <time className="meta text-[var(--text-meta)]">
                          {new Date(
                            item?.createdAt?.seconds * 1000
                          ).toLocaleDateString("en-us")}
                        </time>
                      </div>
                    </div>
                    {item?.info}
                  </td>
                  <td>{item?.username}</td>
                  <td>{item?.email.slice(0, 6) + "..."}</td>
                  <td>{renderUserStatus(Number(item?.status))}</td>
                  <td>{renderRoleLabel(Number(item?.role))}</td>
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
