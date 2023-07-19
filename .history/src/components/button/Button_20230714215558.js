import React from "react";
import "./button.scss";

const Button = ({
  type = "button",
  onClick = () => {},
  className,
  ...props
}) => {
  return <button className={`button ${className}`}>Sign up</button>;
};

export default Button;
