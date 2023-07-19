import React from "react";
import "./SignUpPage.scss";
import Label from "../../components/label/Label";
import { Input, InputPasswordToggle } from "../../components/input";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import Field from "../../components/field/Field";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup.string().required("Please enter your fullname"),
    email: yup.string().email("Please enter a valid email address"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater")
      .required("Please enter your password"),
  })
  .required();

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver({ mode: "onChange", schema }),
  });

  const onSubmit = (data) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
      console.log(data);
    });
  };
  console.log(Object.values(errors));
  return (
    <div className="container">
      <img src="./Logo.svg" alt="Daily News" className="logo" />
      <div className="signup-heading mb-10">
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

export default SignUpPage;
