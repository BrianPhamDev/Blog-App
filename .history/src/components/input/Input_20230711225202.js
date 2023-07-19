import React from "react";
import "./input.scss";
import { useController } from "react-hook-form";
const Input = ({ name, type, placeholder, className, ...props }) => {
  return (
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
      {...props}
    />
  );
};

export default Input;
