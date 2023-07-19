import React, { useEffect } from "react";
import "./signInPage.scss";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "../authenticationPage/AuthenticationPage";
import Label from "../../components/label/Label";
import Field from "../../components/field/Field";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Input, InputPasswordToggle } from "../../components/input";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater")
      .required("Please enter your password"),
  })
  .required();

const SignInPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  console.log(userInfo);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange", schema });

  const handleSignIn = () => {};

  // useEffect(() => {
  //   if (!userInfo.email) navigate("/sign-up");
  //   else navigate("/");
  // }, [userInfo]);

  return (
    <div>
      <AuthenticationPage
        heading="Sign In"
        desc="Please sign in with your email"
      ></AuthenticationPage>

      <form className="signup-form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email">Email Address</Label>
          <Input control={control} name="email" type="text"></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPasswordToggle
            control={control}
            name="password"
            type="password"
          ></InputPasswordToggle>
          <Button
            type="submit"
            className="mt-5"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign In
          </Button>
        </Field>
      </form>
    </div>
  );
};

export default SignInPage;
