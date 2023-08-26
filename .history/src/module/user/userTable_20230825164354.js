import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase-config";
import { collection, deleteDoc, onSnapshot, query } from "firebase/firestore";
import Table from "../../components/table/Table";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import { useNavigate } from "react-router-dom";
import { LabelStatus } from "../../components/label";
import { userStatus, userRole } from "../../utils/constants";
import {
  doc,
  where,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";
import Swal from "sweetalert2";

const UserTable = ({ filter }) => {
  const categoryPerPage = 1;
  const [userList, setUserList] = useState([]);
  const [lastDoc, setLastDoc] = useState();
  const [total, setTotal] = useState(0);

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

  const handleDeleteUser = async (userId) => {
    const docRef = doc(db, "users", userId.id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(docRef);
        // await deleteUser(userId);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleLoadMore = async () => {
    const nextRef = query(
      collection(db, "users"),
      orderBy("username"),
      startAfter(lastDoc || 0),
      limit(categoryPerPage)
    );
    onSnapshot(nextRef, (snapshot) => {
      let results = [];
      snapshot.forEach((item) => {
        results.push({
          id: item.id,
          ...item.data(),
        });
      });
      setUserList([...userList, ...results]);
    });
    const documentSnapshots = await getDocs(nextRef);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastDoc(lastVisible);
    console.log(lastVisible.id);
  };

  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "users");
      const queryRef = filter
        ? query(
            colRef,
            where("username", ">=", filter),
            where("username", "<", filter + "\uf8ff"),
            orderBy("username"),
            limit(categoryPerPage)
          )
        : query(colRef, orderBy("username"), limit(categoryPerPage));

      const documentSnapshots = await getDocs(queryRef);
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      setLastDoc(lastVisible);

      onSnapshot(colRef, (snapshot) => {
        setTotal(snapshot.size);
      });

      onSnapshot(queryRef, (snapshot) => {
        let results = [];
        snapshot.forEach((item) => {
          results.push({
            id: item.id,
            ...item.data(),
          });
        });
        setUserList(results);
      });
    }
    fetchData();
  }, [filter]);
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
                        src={
                          item?.avatar ||
                          "https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        }
                        alt="avatar"
                        className="w-[42px] h-[42px] rounded-full flex-shrink-0 object-cover"
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
                      {/* <ActionView></ActionView> */}
                      <ActionEdit
                        onClick={() => {
                          navigate(`/manage/update-user?id=${item.id}`);
                        }}
                      ></ActionEdit>
                      <ActionDelete
                        onClick={() => {
                          handleDeleteUser(item);
                        }}
                      ></ActionDelete>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {total > userList.length && (
        <div className="mt-10 flex justify-center w-full items-center">
          <button
            className="px-8 bg-[var(--gray-600)] text-white font-semibold py-3 rounded-md"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default UserTable;
