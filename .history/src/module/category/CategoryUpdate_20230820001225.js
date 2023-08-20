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
import { categoryStatus } from "../../utils/constants";

const CategoryUpdate = () => {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  // console.log(params);
  const {
    control,
    reset,
    watch,
    values,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      slug: "",
      status: null,
    },
  });

  const watchStatus = Number(watch("status"));

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "categories", `${categoryId}`);
      const result = await getDoc(docRef);
      reset(result.data());
    }
    fetchData();
  }, [categoryId, reset]);

  const handleUpdateCategory = async (values) => {
    const docRef = doc(db, "categories", `${categoryId}`);
    await setDoc(docRef, {
      ...values,
    });
  };

  return (
    <div>
      <DashboardHeading>Update category</DashboardHeading>
      <h3 className="mb-8">
        Category id: <span className="font-semibold">{categoryId}</span>
      </h3>
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
              <Radio
                name="status"
                control={control}
                value={categoryStatus.APPROVED}
                checked={watchStatus === categoryStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                value={categoryStatus.REJECTED}
                checked={watchStatus === categoryStatus.REJECTED}
              >
                Not Approved
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          onClick={() => handleSubmit(handleUpdateCategory)}
        >
          Update category
        </Button>
      </form>
    </div>
  );
};

export default CategoryUpdate;
