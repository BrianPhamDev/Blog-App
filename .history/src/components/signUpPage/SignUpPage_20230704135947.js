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

      <form className="signUp-form">
        <div className="signUp-fullname">
          <label htmlFor="fullname" className="heading-3">
            Full Name:
          </label>
          <input type="text" placeholder="Enter Your Full Name" />
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
