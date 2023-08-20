import React, { useEffect, useState } from "react";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Button } from "../../components/button";
import Table from "../../components/table/Table";
import { LabelStatus } from "../../components/label";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import { db } from "../../firebase/firebase-config";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { categoryStatus } from "../../utils/constants";
import Swal from "sweetalert2";

const CategoryManage = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "categories");
    onSnapshot(colRef, (snapshot) => {
      let results = [];
      snapshot.forEach((item) => {
        results.push({
          id: item.id,
          ...item.data(),
        });
        setCategoryList(results);
      });
    });
  }, []);

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
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    // await deleteDoc(docRef);
  };

  return (
    <div>
      <div className="flex justify-between">
        <DashboardHeading>Categories</DashboardHeading>
        <Button type="button" to="/manage/add-category" kind="secondary">
          Create category
        </Button>
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
                    <ActionEdit></ActionEdit>
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
    </div>
  );
};

export default CategoryManage;
