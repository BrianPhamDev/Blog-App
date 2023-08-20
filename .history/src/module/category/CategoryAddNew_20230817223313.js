import React from "react";
import { useForm } from "react-hook-form";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Field } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { Radio } from "../../components/checkbox";
import { Button } from "../../components/button";
import { FieldCheckboxes } from "../../components/field";
import slugify from "slugify";
import { categoryStatus } from "../../utils/constants";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { toast } from "react-toastify";

const CategoryAddNew = () => {
  const {
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      slug: "",
      status: 1,
      createdAt: new Date(),
    },
  });

  const watchStatus = watch("status");

  const handleAddNewCategory = async (value) => {
    const newValues = { ...value };
    newValues.slug = slugify(value?.slug || value.name, { lower: true });
    newValues.status = Number(newValues.status);
    console.log(newValues);

    try {
      const colRef = collection(db, "categories");
      await addDoc(colRef, { ...newValues });

      toast.success("New category added successfully");
    } catch (error) {}
  };

  return (
    <div>
      <DashboardHeading>Add category</DashboardHeading>
      <form onSubmit={handleSubmit(handleAddNewCategory)}>
        <div className="form-layout">
          <Field>
            <Label>Name</Label>
            <Input
              control={control}
              placeholder="Enter your category name"
              name="name"
              required
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === categoryStatus.APPROVED}
                value={categoryStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === categoryStatus.REJECTED}
                value={categoryStatus.REJECTED}
              >
                Not Approved
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button type="submit">Add category</Button>
      </form>
    </div>
  );
};

export default CategoryAddNew;
