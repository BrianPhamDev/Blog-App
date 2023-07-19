import React from "react";
import "./input.scss";
import { useController } from "react-hook-form";

const Input = ({
  name,
  type,
  className,
  control,
  hasIcon = false,
  ...props
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <input
      id={name}
      type={type}
      className={`input ${className}`}
      {...field}
      {...props}
    />
  );
};

export default Input;
