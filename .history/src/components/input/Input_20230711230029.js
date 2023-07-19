import React from "react";
import "./input.scss";
const Input = ({ name, type, placeholder, className, ...props }) => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
      {...props}
    />
  );
};

export default Input;
