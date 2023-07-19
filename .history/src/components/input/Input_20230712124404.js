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
  ...props
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  const hasIcon = children ? "input has-icon" : "input";
  return (
    <div className="inputWrapper">
      <input
        id={name}
        type={type}
        className={`${hasIcon} ${className}`}
        {...field}
        {...props}
      />
      {children}
    </div>
  );
};

export default Input;
