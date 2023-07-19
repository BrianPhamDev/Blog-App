import React from "react";
import "./SignUpPage.scss";
import Label from "../label/Label";
import Input from "../input/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container">
      <img src="./Logo.svg" alt="Daily News" className="logo" />
      <div className="signup-heading">
        <h2 className="heading-2">Sign in</h2>
        <p>Please enter your email to sign in.</p>
      </div>

      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="signup-fullname">
          <Label htmlFor="fullname">Full Name:</Label>
          <Input
            id="fullname"
            type="text"
            placeholder="Enter Your Full Name"
            className="input"
            {...register("fullname")}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
