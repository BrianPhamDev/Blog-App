import React from "react";
import "./heading.scss";
const Heading = ({ className = "", children, ...props }) => {
  return (
    <div className="flex items-center justify-center"></div><h2 className={`${className} heading-2 heading-category`} {...props}>
      {children}
    </h2>
  );
};

export default Heading;
