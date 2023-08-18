import React from "react";
import { useForm } from "react-hook-form";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryAddNew = () => {
  const {
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange" });
  return (
    <div>
      <DashboardHeading>Add category</DashboardHeading>
      <form>
        <div className="form-layout"></div>
      </form>
    </div>
  );
};

export default CategoryAddNew;
