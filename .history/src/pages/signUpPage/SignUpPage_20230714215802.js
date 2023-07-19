import React from "react";
import "./SignUpPage.scss";
import Label from "../../components/label/Label";
import { Input, InputPasswordToggle } from "../../components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/button";
import * as yup from "yup";
import Field from "../../components/field/Field";

const schema = yup
  .object({
    fullName: yup.string().required("Please enter your fullname"),
  })
  .required();

const SignUpPage = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <img src="./Logo.svg" alt="Daily News" className="logo" />
      <div className="signup-heading">
        <h2 className="heading-2 mb-1">Sign Up</h2>
        <p>Please enter your email to sign up.</p>
      </div>

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
        <Button type="submit" disabled className="mt-5">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
