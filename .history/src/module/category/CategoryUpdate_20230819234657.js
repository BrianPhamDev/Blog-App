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
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const CategoryUpdate = () => {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  useEffect( () => {
    const docRef = doc(db, "categories", `${params}`);
    
    await setDoc(docRef, {});
  }, [params]);

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
