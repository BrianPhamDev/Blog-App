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
      <div className="w-fit mb-6">
        <Button type="button" to="/manage/add-category" kind="secondary">
          Create category
        </Button>
      </div>

      <div className="category-search max-w-[320px] mb-6">
        <input
          type="text"
          placeholder="Search category..."
          className="input"
          // onChange={handleInputChange}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
      <div className="mt-10 flex justify-center w-full items-center">
        <button
          className="px-8 bg-[var(--gray-600)] text-white font-semibold py-3 rounded-md"
          // onClick={handleLoadMore}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default UserManage;
