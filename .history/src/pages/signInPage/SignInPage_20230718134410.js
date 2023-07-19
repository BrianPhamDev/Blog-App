import React, { useEffect } from "react";
import "./signInPage.scss";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "../authenticationPage/AuthenticationPage";

const SignInPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  console.log(userInfo);
  // useEffect(() => {
  //   if (!userInfo.email) navigate("/sign-up");
  //   else navigate("/");
  // }, [userInfo]);

  return (
    <div>
      <AuthenticationPage heading="Sign In"></AuthenticationPage>
    </div>
  );
};

export default SignInPage;
