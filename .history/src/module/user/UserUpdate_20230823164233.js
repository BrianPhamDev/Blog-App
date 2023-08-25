import { React, useEffect } from "react";
import { Button } from "../../components/button";
import DashboardHeading from "../dashboard/DashboardHeading";
import { useSearchParams } from "react-router-dom";
import { Field, FieldCheckboxes } from "../../components/field";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { useForm } from "react-hook-form";
import { Radio } from "../../components/checkbox";
import { userRole, userStatus } from "../../utils/constants";
import ImageUpload from "../../components/image/ImageUpload";
import useFirebaseImage from "../../hooks/useFirebaseImage";

const UserUpdate = () => {
  const {
    control,
    watch,
    getValues,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    mode: "onchange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      username: "",
      avatar: "",
      status: userStatus.ACTIVE,
      role: userRole.USER,
      createdAt: new Date(),
    },
  });
  const {
    handleSelectImage,
    image,
    progress,
    handleDeleteImage,
    handeResetUpload,
  } = useFirebaseImage(setValue, getValues);
  const watchRoles = watch("role");
  const watchStatus = watch("status");
  const [params] = useSearchParams();
  const userId = params.get("id");
  if (!userId) return null;
  console.log(params);
  useEffect(() => {
    handeResetUpload();
  }, []);

  return (
    <div>
      <DashboardHeading>Update user</DashboardHeading>
      <h3 className="mb-8">
        User id: <span className="font-semibold">{userId}</span>
      </h3>
      <div className="mb-[60px] pt-[24px]">
        <ImageUpload
          className="max-w-[200px] max-h-[200px] !rounded-full min-h-0 mx-auto"
          image={image}
          onChange={handleSelectImage}
          progress={progress}
          handleDeleteImage={handleDeleteImage}
        ></ImageUpload>
      </div>
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
        <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
          Update category
        </Button>
      </form>
    </div>
  );
};

export default UserUpdate;
