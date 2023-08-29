import React, { useEffect, useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import Table from "../../../components/table/Table";
import DashboardHeading from "../../dashboard/DashboardHeading";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { Button } from "../../../components/button";
import ActionView from "../../../components/action/ActionView";
import ActionEdit from "../../../components/action/ActionEdit";
import ActionDelete from "../../../components/action/ActionDelete";
import { useNavigate } from "react-router-dom";

const PostManage = () => {
  const [postList, setPostList] = useState([]);
  const [filter, setFilter] = useState("");
  const categoryPerPage = 10;
  const [lastDoc, setLastDoc] = useState();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const handleDeletePost = () => {};
  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "posts");
      const queryRef = filter
        ? query(
            colRef,
            where("title", ">=", filter),
            where("title", "<", filter + "\uf8ff"),
            orderBy("title")
          )
        : query(colRef, orderBy("title"), limit(categoryPerPage));

      const documentSnapshots = await getDocs(queryRef);
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      // console.log("last", lastVisible);
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
        console.log(results);
        setPostList(results);
      });
    }
    fetchData();
  }, [filter]);

  return (
    <div className="container">
      <DashboardHeading>Manage post</DashboardHeading>
      <div className="w-fit mb-6">
        <Button type="button" to="/manage/add-post" kind="secondary">
          Create post
        </Button>
      </div>
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>info</td>
                <td>{item.category.name}</td>
                <td>{item.id}</td>
                <td>
                  <div className="flex items-center gap-x-3">
                    <ActionView></ActionView>
                    <ActionEdit
                      onClick={() => {
                        navigate(`/manage/update-category?id=${item.id}`);
                      }}
                    ></ActionEdit>
                    <ActionDelete
                      onClick={() => {
                        handleDeletePost(item.id);
                      }}
                    ></ActionDelete>
                  </div>
                </td>
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
