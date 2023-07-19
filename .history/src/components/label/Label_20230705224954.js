import React from "react";
import { Children } from "react";

const Label = ({ htmlFor, className, ...props }) => {
  return (
    <label htmlFor="fullname" className="heading-3 label">
      {Children}
    </label>
  );
};

export default Label;
