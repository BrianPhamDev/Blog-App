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
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import slugify from "slugify";
import { userRole, userStatus } from "../../utils/constants";

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

    await createUserWithEmailAndPassword(auth, data.email, data.password);
    await updateProfile(auth.currentUser, {
      displayName: data.fullName,
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/blogging-dc5e9.appspot.com/o/images%2Fdefault-avatar.webp?alt=media&token=a6187cf5-9294-4d1d-aaf3-565fa8598a88",
    });
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      username: slugify(data.fullName, { lower: true }),
      avatar:
        "https://images.unsplash.com/photo-1593985887762-955dccf2b71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      status: userStatus.ACTIVE,
      role: userRole.USER,
      createdAt: serverTimestamp(),
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
    <div className="container">
      <AuthenticationPage
        heading="Sign Up"
        desc="Please enter your email to sign up"
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
        <div className="button-text cursor-pointer hover:opacity-80 mb-6">
          <NavLink className="" to={"/sign-in"}>
            Have an account?
          </NavLink>
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
