import React from "react";
import "input.scss";
const Input = ({ id, type, placeholder, className, ...props }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
      {...props}
    />
  );
};

export default Input;
