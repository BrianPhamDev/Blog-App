import React from "react";
import "./input.scss";
import { useController } from "react-hook-form";
import IconEyeOpen from "../icons/IconEyeOpen";
const Input = ({
  name = "",
  type = "text",
  children,
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
    <className="inputWrapper" hasIcon={hasIcon}>
      <input
        id={name}
        type={type}
        className={`input ${className}`}
        {...field}
        {...props}
      />
      {hasIcon ? <IconEyeOpen className="icon-eye"></IconEyeOpen> : null}
    </className=>
  );
};

export default Input;
