import React, { useEffect, useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import Table from "../../../components/table/Table";
import DashboardHeading from "../../dashboard/DashboardHeading";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { orderBy } from "lodash";

const PostManage = () => {
  const [postList, setPostList] = useState([]);
  const [filter, setFilter] = useState("");
  const categoryPerPage = 10;
  const [lastDoc, setLastDoc] = useState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function fetchData() {
      const colRef = collection(db, "posts");
      // const queryRef = filter
      //   ? query(
      //       colRef,
      //       where("title", ">=", filter),
      //       where("title", "<", filter + "\uf8ff"),
      //       orderBy("title")
      //     )
      //   : query(colRef, orderBy("title"), limit(categoryPerPage));
      const queryRef = query(colRef, orderBy("title"), limit(categoryPerPage));

      // const documentSnapshots = await getDocs(queryRef);
      // const lastVisible =
      //   documentSnapshots.docs[documentSnapshots.docs.length - 1];
      // // console.log("last", lastVisible);
      // setLastDoc(lastVisible);

      // onSnapshot(colRef, (snapshot) => {
      //   setTotal(snapshot.size);
      // });

      onSnapshot(queryRef, (snapshot) => {
        let results = [];
        snapshot.forEach((item) => {
          results.push({
            id: item.id,
            ...item.data(),
          });
        });
        console.log(results);
        setPostList(results);
      });
    }
    fetchData();
  }, [filter]);

  return (
    <div className="container">
      <DashboardHeading>Manage post</DashboardHeading>
      <div className="mb-10 flex justify-end">
        <div className="w-full max-w-[300px]">
          <input
            type="text"
            className="w-full p-4 rounded-lg border border-solid border-gray-300"
            placeholder="Search post..."
          />
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Post</th>
            <th>Category</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {postList.length > 0 &&
            postList.map((item) => (
              <tr key={item.title}>
                <td>{item.id}</td>
                <td>{item.id}</td>
                <td>{item.id}</td>
                <td>{item.id}</td>
                <td>{item.id}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="mt-10">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default PostManage;
