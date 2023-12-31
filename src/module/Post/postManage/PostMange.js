import React, { useEffect, useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import Table from "../../../components/table/Table";
import DashboardHeading from "../../dashboard/DashboardHeading";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { Button } from "../../../components/button";
import ActionView from "../../../components/action/ActionView";
import ActionEdit from "../../../components/action/ActionEdit";
import ActionDelete from "../../../components/action/ActionDelete";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postStatus } from "../../../utils/constants";
import { LabelStatus } from "../../../components/label";
import { debounce } from "lodash";

const PostManage = () => {
  const [postList, setPostList] = useState([]);
  const [filter, setFilter] = useState("");
  const postPerPage = 10;
  const [lastDoc, setLastDoc] = useState();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const renderPostStatus = (status) => {
    switch (status) {
      case postStatus.APPROVED:
        return <LabelStatus type="success"></LabelStatus>;
      case postStatus.PENDING:
        return <LabelStatus type="warning"></LabelStatus>;
      case postStatus.REJECTED:
        return <LabelStatus type="danger"></LabelStatus>;
      default:
        break;
    }
  };

  const handleDeletePost = (postId) => {
    const docRef = doc(db, "posts", postId);

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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleInputChange = debounce((e) => {
    setFilter(e.target.value);
  }, 350);
  const handleLoadMore = async () => {
    const nextRef = query(
      collection(db, "posts"),
      orderBy("title"),
      startAfter(lastDoc || 0),
      limit(postPerPage)
    );
    onSnapshot(nextRef, (snapshot) => {
      let results = [];
      snapshot.forEach((item) => {
        results.push({
          id: item.id,
          ...item.data(),
        });
      });
      setPostList([...postList, ...results]);
    });
    const documentSnapshots = await getDocs(nextRef);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastDoc(lastVisible);
    console.log(lastVisible);
  };
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
        : query(colRef, orderBy("title"), limit(postPerPage));

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
            onChange={handleInputChange}
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
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {postList.length > 0 &&
            postList.map((item) => (
              <tr key={item.id}>
                <td>{item.id?.slice(0, 5) + "..."}</td>
                <td className="">
                  <div className="flex gap-x-3 items-center">
                    <img
                      src={
                        item?.image ||
                        "https://plus.unsplash.com/premium_photo-1681554601855-e04b390b5a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      }
                      alt="image"
                      className="w-[150px] rounded-sm flex-shrink-0 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="break-lines ">{item?.title}</h3>
                      <time className="meta text-[var(--text-meta)]">
                        {new Date(
                          item?.createdAt?.seconds * 1000
                        ).toLocaleDateString("en-us")}
                      </time>
                    </div>
                  </div>
                </td>
                <td>{item?.category.name}</td>
                <td>{item?.user.username}</td>
                <td>{renderPostStatus(item.user.status)}</td>
                <td>
                  <div className="flex items-center gap-x-3">
                    <ActionView
                      onClick={() => {
                        navigate(`/${item.slug}`);
                      }}
                    ></ActionView>
                    <ActionEdit
                      onClick={() => {
                        navigate(`/manage/update-post?id=${item.id}`);
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
      {total > postList.length && (
        <div className="mt-10 flex justify-center w-full items-center">
          <button
            className="px-8 bg-[var(--gray-600)] text-white font-semibold py-3 rounded-md"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
      {/* <div className="mt-10">
        <Pagination></Pagination>
      </div> */}
    </div>
  );
};

export default PostManage;
