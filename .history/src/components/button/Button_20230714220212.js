import React from "react";
import "./button.scss";

const Button = ({
  type = "button",
  onClick = () => {},
  className,
  children,
  ...props
}) => {
  return (
    <button type={type} className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
