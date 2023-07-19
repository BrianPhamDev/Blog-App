import React, { useEffect } from "react";
import "./signInPage.scss";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const nav = useNavigate();
  const { userInfo } = useAuth();
  console.log(userInfo);
  useEffect(() => {
    if (userInfo.email) {
      nav("/sign-up");
    }
  });
  return <div></div>;
};

export default SignInPage;
