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

const SignInPage = () => {
  const navigate = useNavigate();
  const {
    userInfo,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useAuth();
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

      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
};

export default SignInPage;
