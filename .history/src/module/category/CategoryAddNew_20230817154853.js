import React from "react";
import { useForm } from "react-hook-form";
import DashboardHeader from "../dashboard/DashboardHeader";

const CategoryAddNew = () => {
  const {
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange" });
  return (
    <div>
      <DashboardHeader>Add category</DashboardHeader>
    </div>
  );
};

export default CategoryAddNew;
