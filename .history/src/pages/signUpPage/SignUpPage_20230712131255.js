import React from "react";
import "./SignUpPage.scss";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeClose } from "../../components/icons";
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
        <h2 className="heading-2">Sign in</h2>
        <p>Please enter your email to sign in.</p>
      </div>

      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label htmlFor="fullName">Full Name:</Label>
          <Input
            name="fullName"
            type="text"
            placeholder="Enter Your Full Name"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Full Name:</Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            control={control}
          >
            {" "}
          </Input>
        </Field>
        <Field>
          <Label htmlFor="fullName">Full Name:</Label>
          <Input
            name="fullName"
            type="text"
            placeholder="Enter Your Full Name"
            control={control}
          >
            <IconEyeClose className="input-icon"></IconEyeClose>
          </Input>
        </Field>
      </form>
    </div>
  );
};

export default SignUpPage;
