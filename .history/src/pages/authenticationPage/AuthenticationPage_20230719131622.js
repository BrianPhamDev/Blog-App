import React from "react";
import "./authenticationPage.scss";
const AuthenticationPage = ({ heading, desc }) => {
  return (
    <div className="container">
      <img src="./Logo.svg" alt="Newsiten" className="logo" />
      <div className="signup-heading mb-10">
        <h2 className="heading-2 mb-1">{heading}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AuthenticationPage;
