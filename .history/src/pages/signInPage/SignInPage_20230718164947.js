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
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";

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
  //console.log(userInfo);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const handleSignIn = async (data) => {
    console.log(data);
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, data.email, data.password);
    navigate("/");
  };

  useEffect(() => {
    document.title = "Login Page";
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, { pauseOnHover: false, delay: 0 });
    }
  }, [errors]);

  useEffect(() => {
    if (userInfo?.email) navigate("/");
  }, [userInfo]);

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
          <div className="button-text cursor-pointer hover:opacity-80">
            <NavLink to={"/sign-up"}>Sign up instead?</NavLink>
          </div>
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
