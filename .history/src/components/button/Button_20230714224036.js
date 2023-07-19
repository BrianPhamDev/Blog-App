import React from "react";
import "./button.scss";
import Spinner from "../spinner/Spinner";

const Button = ({
  type = "button",
  onClick = () => {},
  className,
  children,
  ...props
}) => {
  const { isLoading } = props;
  const child = !!isLoading ? <Spinner></Spinner> : children;
  return (
    <button type={type} className={`button ${className}`} {...props}>
      {child}
    </button>
  );
};

export default Button;
