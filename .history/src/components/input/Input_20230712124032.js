import React from "react";
import "./input.scss";
import { useController } from "react-hook-form";
//import IconEyeOpen from "../icons/IconEyeOpen";
import { IconEyeClose, IconEyeOpen } from "../icons";
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
    <div className="inputWrapper" hasIcon={hasIcon}>
      <input
        id={name}
        type={type}
        className={`input ${className}`}
        {...field}
        {...props}
      />
      {children}
    </div>
  );
};

export default Input;
