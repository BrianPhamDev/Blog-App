import React from "react";
import { useForm } from "react-hook-form";
import DashboardHeading from "../dashboard/DashboardHeading";
import { Field, FieldCheckboxes } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { Radio } from "../../components/checkbox";
import { Button } from "../../components/button";
import ImageUpload from "../../components/image/ImageUpload";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import { userStatus } from "../../utils/constants";
import { userRole } from "../../utils/constants";

const UserAddNew = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      status: 1,
    },
  });
  const {
    handleSelectImage,
    image,
    progress,
    handleDeleteImage,
    handeResetUpload,
  } = useFirebaseImage(setValue, getValues);
  const watchStatus = watch("status");
  const watchRoles = watch("role");

  const handleCreateUser = (values) => {
    if (!isValid) return;
    console.log(values);
    handeResetUpload();
  };
  return (
    <div>
      <DashboardHeading>New user</DashboardHeading>
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div className="mb-[60px]">
          <ImageUpload
            className="max-w-[200px] max-h-[200px] !rounded-full min-h-0 mx-auto"
            image={image}
            onChange={handleSelectImage}
            progress={progress}
            handleDeleteImage={handleDeleteImage}
          ></ImageUpload>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Full Name</Label>
            <Input
              name="fullname"
              placeholder="Enter your fullname"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label>User Name</Label>
            <Input
              name="username"
              placeholder="Enter your username"
              control={control}
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              control={control}
              type="email"
            ></Input>
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              name="password"
              placeholder="Enter your password"
              control={control}
              type="password"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                checked={Number(watchStatus) === userStatus.ACTIVE}
                value={userStatus.ACTIVE}
                name="status"
                control={control}
              >
                Active
              </Radio>
              <Radio
                checked={Number(watchStatus) === userStatus.PENDING}
                value={userStatus.PENDING}
                name="status"
                control={control}
              >
                Pending
              </Radio>
              <Radio
                checked={Number(watchStatus) === userStatus.BAN}
                value={userStatus.BAN}
                name="status"
                control={control}
              >
                Banned
              </Radio>
            </FieldCheckboxes>
          </Field>
          <Field>
            <Label>Role</Label>
            <FieldCheckboxes>
              <Radio
                checked={Number(watchRoles) === userRole.ADMIN}
                value={userRole.ADMIN}
                name="role"
                control={control}
              >
                Admin
              </Radio>
              <Radio
                checked={Number(watchRoles) === userRole.MOD}
                value={userRole.MOD}
                name="role"
                control={control}
              >
                Moderator
              </Radio>
              <Radio
                checked={Number(watchRoles) === userRole.USER}
                value={userRole.USER}
                name="role"
                control={control}
              >
                User
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button
          type="submit"
          className=""
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Add user
        </Button>
      </form>
    </div>
  );
};

export default UserAddNew;
