import React from "react";
import { Button } from "../../../components/button";
import { Field } from "../../../components/field";
import { Input } from "../../../components/input";
import { Label } from "../../../components/label";
import { useForm } from "react-hook-form";
import { Checkbox, Radio } from "../../../components/checkbox";
import { Dropdown } from "../../../components/dropdown";

const PostAddNew = () => {
  const { control, watch, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      status: "",
      category: "",
    },
  });
  const watchStatus = watch("status");
  const watchCategory = watch("category");
  console.log("PostAddNew ~ watchCategory", watchCategory);
  return (
    <div>
      <h1 className="heading-2 text-gradient mb-8">Add new post</h1>
      <form>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
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
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={watchStatus === "approved"}
                onClick={() => setValue("status", "approved")}
                value="approved"
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={watchStatus === "pending"}
                onClick={() => setValue("status", "pending")}
                value="pending"
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={watchStatus === "reject"}
                onClick={() => setValue("status", "reject")}
                value="reject"
              >
                Reject
              </Radio>
            </div>
          </Field>
          <Field>
            <Label>Author</Label>
            <Input control={control} placeholder="Find the author"></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Category</Label>
          </Field>
          <Field></Field>
        </div>
        <Button type="submit" className="mx-auto">
          Add new post
        </Button>
      </form>
    </div>
  );
};

export default PostAddNew;
