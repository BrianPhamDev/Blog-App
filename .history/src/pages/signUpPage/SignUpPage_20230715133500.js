import React, { useEffect } from "react";
import "./SignUpPage.scss";
import Label from "../../components/label/Label";
import { Input, InputPasswordToggle } from "../../components/input";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import Field from "../../components/field/Field";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

const schema = yup
  .object({
    fullName: yup.string().required("Please enter your fullname"),
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

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    if (!isValid) return;
    console.log(data);
    const user = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    toast.success("User created succesfully!");
    await updateProfile(auth.currentUse, { displayName: data.fullName });
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, { pauseOnHover: false, delay: 2000 });
    }
  }, [errors]);

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
