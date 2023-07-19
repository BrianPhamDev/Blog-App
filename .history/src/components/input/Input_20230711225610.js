import React from "react";
import "./input.scss";
import { useController } from "react-hook-form";
const Input = ({ name, type, placeholder, className, ...props }) => {
  const { field, fieldState } = useController(props);
  console.log(field);
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
