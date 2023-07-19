import React from "react";

const Label = ({ htmlFor, className, ...props }) => {
  return (
    <label htmlFor="fullname" className="heading-3 label">
      Full Name:
    </label>
  );
};

export default Label;
