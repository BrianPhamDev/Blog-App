import React, { useEffect } from "react";
import "./signInPage.scss";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  console.log(userInfo);
  useEffect(() => {
    if (!userInfo.email) navigate("/sign-up");
  });
  return <div></div>;
};

export default SignInPage;
