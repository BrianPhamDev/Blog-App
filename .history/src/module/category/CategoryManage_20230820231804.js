import React, { useEffect, useState } from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";
import Table from "../../components/table/Table";
import { LabelStatus } from "../../components/label";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import { db } from "../../firebase/firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
} from "firebase/firestore";
import { categoryStatus } from "../../utils/constants";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { debounce } from "debounce";

const CategoryManage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [lastDoc, setLastDoc] = useState("");

  const handleLoadMore = async () => {
    const nextRef = query(
      collection(db, "categories"),
      orderBy("name"),
      startAfter(lastDoc || 0),
      limit(1)
    );

    onSnapshot(nextRef, (snapshot) => {
      let results = [];
      snapshot.forEach((item) => {
        results.push({
          id: item.id,
          ...item.data(),
        });
      });
      setCategoryList(results);
    });
    const documentSnapshots = await getDocs(nextRef);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLastDoc(lastVisible);
    setLastDoc(nextRef);
    console.log(lastDoc.id);
  };

  const handleInputChange = debounce((e) => {
    setFilter(e.target.value);
  }, 350);

  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "categories");
      const queryRef = filter
        ? query(
            colRef,
            where("name", ">=", filter),
            where("name", "<", filter + "\uf8ff"),
            orderBy("name")
          )
        : query(colRef, orderBy("name"), limit(1));

      const documentSnapshots = await getDocs(queryRef);
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      // console.log("last", lastVisible);
      setLastDoc(lastVisible);

      onSnapshot(queryRef, (snapshot) => {
        let results = [];
        snapshot.forEach((item) => {
          results.push({
            id: item.id,
            ...item.data(),
          });
        });
        setCategoryList(results);
      });
    }
    fetchData();
  }, [filter]);

  const handleDeleteCategory = async (docId) => {
    const docRef = doc(db, "categories", docId);

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

  return (
    <div>
      <DashboardHeading>Categories</DashboardHeading>

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
          onChange={handleInputChange}
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
        <tbody>
          {categoryList.length > 0 &&
            categoryList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <span className="italic text-[var(--text-meta)]">
                    {item.slug}
                  </span>
                </td>
                <td>
                  {item.status === categoryStatus.APPROVED && (
                    <LabelStatus type="success"></LabelStatus>
                  )}
                  {item.status === categoryStatus.REJECTED && (
                    <LabelStatus type="warning"></LabelStatus>
                  )}
                </td>
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
                        handleDeleteCategory(item.id);
                      }}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="mt-10 flex justify-center w-full items-center">
        <button
          className="px-8 bg-[var(--gray-600)] text-white font-semibold py-3 rounded-md"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default CategoryManage;
