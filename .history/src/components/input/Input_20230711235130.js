import React from "react";
import "./input.scss";
import { useController } from "react-hook-form";

const Input = ({ name, type, control, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return <input id={name} type={type} {...field} {...props} />;
};

export default Input;
