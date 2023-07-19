import React from "react";
import "./label.scss";

const Label = ({ htmlFor, className, children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`heading-3 label ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
