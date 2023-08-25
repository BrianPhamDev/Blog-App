import React from "react";
import { Button } from "../../components/button";
import DashboardHeading from "../dashboard/DashboardHeading";
import { useSearchParams } from "react-router-dom";
import { Field, FieldCheckboxes } from "../../components/field";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { useForm } from "react-hook-form";
import { Radio } from "../../components/checkbox";

const UserUpdate = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useForm({ mode: "onchange", defaultValues: {} });

  const [params] = useSearchParams();
  const userId = params.get("id");
  if (!userId) return null;
  console.log(params);
  return (
    <div>
      <DashboardHeading>Update user</DashboardHeading>
      <h3 className="mb-8">
        User id: <span className="font-semibold">{userId}</span>
      </h3>
      <form>
        <div className="form-layout">
          <Field>
            <Label>Full name</Label>
            <Input
              control={control}
              placeholder="Enter your full name"
              name="fullName"
              required
            ></Input>
          </Field>
          <Field>
            <Label>Username</Label>
            <Input
              control={control}
              placeholder="Enter your username"
              name="username"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              control={control}
              placeholder="Enter your email"
              name="email"
              required
            ></Input>
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              control={control}
              placeholder="Enter your password"
              name="password"
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
                // value={categoryStatus.APPROVED}
                // checked={watchStatus === categoryStatus.APPROVED}
              >
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

export default UserUpdate;
