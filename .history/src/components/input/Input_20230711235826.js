import React from "react";
import "./input.scss";
import { useController } from "react-hook-form";
import { IconEyeOpen } from "./IconEyeOpen.js";
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
    <>
      <input
        id={name}
        type={type}
        className={`input ${className}`}
        {...field}
        {...props}
      />
      {hasIcon ? <IconEyeOpen></IconEyeOpen> : null}
    </>
  );
};

export default Input;
