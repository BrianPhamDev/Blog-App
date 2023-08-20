import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Field } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { Radio } from "../../components/checkbox";
import { Button } from "../../components/button";
import { FieldCheckboxes } from "../../components/field";
import { useForm } from "react-hook-form";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const CategoryUpdate = () => {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  // console.log(params);
  const {
    control,
    reset,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      slug: "",
      status: 1,
    },
  });

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "categories", `${categoryId}`);
      const result = await getDoc(docRef);
      reset(result.data());
    }
    fetchData();
  }, [categoryId]);

  return (
    <div>
      <DashboardHeading>Update category</DashboardHeading>
      <h3 className="mb-8">Update category id: {categoryId}</h3>
      <form onSubmit={handleSubmit()}>
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
              <Radio name="status" control={control}>
                Approved
              </Radio>
              <Radio name="status" control={control}>
                Not Approved
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
          Update category
        </Button>
      </form>
    </div>
  );
};

export default CategoryUpdate;
