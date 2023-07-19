import React from "react";
import "./SignUpPage.scss";
const SignUpPage = () => {
  return (
    <div className="container">
      <img src="./Logo.svg" alt="Daily News" className="logo" />
      <div className="signUp-heading">
        <h2 className="heading-2">Sign in</h2>
        <p>Please enter your email to sign in.</p>
      </div>

      <div className="signUp-form"></div>
    </div>
  );
};

export default SignUpPage;
