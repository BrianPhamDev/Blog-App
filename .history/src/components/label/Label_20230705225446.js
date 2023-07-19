import React from "react";
import { Children } from "react";
import "./label.scss";

const Label = ({ htmlFor, className, ...props }) => {
  return (
    <label htmlFor={htmlFor} className="heading-3 label" {...props}>
      {children}
    </label>
  );
};

export default Label;
