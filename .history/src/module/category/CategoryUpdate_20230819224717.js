import React from "react";
import { useSearchParams } from "react-router-dom";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryUpdate = () => {
  const [params] = useSearchParams();
  console.log(params.get("id"));
  return (
    <div>
      <DashboardHeading>Update category</DashboardHeading>
    </div>
  );
};

export default CategoryUpdate;
