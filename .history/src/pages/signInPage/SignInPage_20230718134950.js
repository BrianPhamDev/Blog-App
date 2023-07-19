import React, { useEffect } from "react";
import "./signInPage.scss";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "../authenticationPage/AuthenticationPage";
import Label from "../../components/label/Label";
import Field from "../../components/field/Field";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

const SignInPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  console.log(userInfo);

  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("data");
  };
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

      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label htmlFor="fullName">Full Name:</Label>
          <Input name="fullName" type="text" control={control}></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Email Address:</Label>
          <Input name="email" type="email" control={control}></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password:</Label>
          <InputPasswordToggle control={control}></InputPasswordToggle>
        </Field>
        <Button
          type="submit"
          className="mt-5"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign up Now
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
