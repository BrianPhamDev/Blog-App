import React from "react";
import "./input.scss";
import { useController } from "react-hook-form";
import IconEyeOpen from "../icons/IconEyeOpen";
const Input = ({ name = "", type, className, control, hasIcon, ...props }) => {
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
      {hasIcon ? <IconEyeOpen className="icon-eye"></IconEyeOpen> : null}
    </div>
  );
};

export default Input;
