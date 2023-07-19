import React from "react";
import "./SignUpPage.scss";
const SignUpPage = () => {
  return (
    <div className="container">
      <img src="./Logo.svg" alt="Daily News" className="logo" />
      <div className="signup-heading">
        <h2 className="heading-2">Sign in</h2>
        <p>Please enter your email to sign in.</p>
      </div>

      <form className="signup-form">
        <div className="signup-fullname">
          <Label htmlFor="fullname" className="heading-3 label">
            Full Name:
          </Label>
          <input
            id="fullname"
            type="text"
            placeholder="Enter Your Full Name"
            className="input"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
