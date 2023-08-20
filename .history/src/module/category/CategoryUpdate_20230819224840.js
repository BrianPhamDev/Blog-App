import React from "react";
import { useSearchParams } from "react-router-dom";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryUpdate = () => {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  return (
    <div>
      <DashboardHeading>Update category</DashboardHeading>
      <h3>{categoryId}</h3>
    </div>
  );
};

export default CategoryUpdate;
