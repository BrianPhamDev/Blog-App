import React from "react";
import { useForm } from "react-hook-form";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Field } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
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
        <div className="form-layout">
          <Field>
            <Label>Name</Label>
          </Field>
        </div>
      </form>
    </div>
  );
};

export default CategoryAddNew;
