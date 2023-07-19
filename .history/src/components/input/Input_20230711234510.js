import React from "react";
import "./input.scss";
import { useController } from "react-hook-form";

const Input = ({ name, type, placeholder, className, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
      {...field}
      {...props}
    />
  );
};

export default Input;
