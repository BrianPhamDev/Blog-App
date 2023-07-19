import React from "react";
import "./signInPage.scss";
import { useAuth } from "../../contexts/auth-context";

const SignInPage = () => {
  const { userInfo } = useAuth();
  return <div></div>;
};

export default SignInPage;
