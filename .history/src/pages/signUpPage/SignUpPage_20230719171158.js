import React, { useEffect } from "react";
import "./signUpPage.scss";
import Label from "../../components/label/Label";
import { Input, InputPasswordToggle } from "../../components/input";
import AuthenticationPage from "../authenticationPage/AuthenticationPage";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import Field from "../../components/field/Field";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { NavLink } from "react-router-dom";

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
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    if (!isValid) return;
    //console.log(data);

    await createUserWithEmailAndPassword(auth, data.email, data.password);

    await updateProfile(auth.currentUser, { displayName: data.fullName });

    const colRef = collection(db, "user");

    await addDoc(colRef, {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });

    toast.success("User created succesfully!");

    navigate("/");
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, { pauseOnHover: false, delay: 0 });
    }
  }, [errors]);

  useEffect(() => {
    document.title = "Signup Page";
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center h-screen">
      <AuthenticationPage
        heading="Sign Up"
        desc="Please enter your email to sign up"
      ></AuthenticationPage>

      <form
        className="signup-form w-full flex-1 flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <div className="button-text cursor-pointer hover:opacity-80">
          <NavLink to={"/sign-in"}>Have an account?</NavLink>
        </div>
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
