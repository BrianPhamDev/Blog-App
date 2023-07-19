import React from "react";
import "./button.scss";

const Button = ({ className, ...props }) => {
  return <button className={`button ${className}`}>Sign up</button>;
};

export default Button;
