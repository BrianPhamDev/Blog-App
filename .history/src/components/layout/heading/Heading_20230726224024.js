import React from "react";
import "./heading.scss";
const Heading = ({ className = "", children, ...props }) => {
  return (
    <div className="flex items-center justify-center mb-12 mt-16">
      <h2 className={`${className} heading-2 heading-category`} {...props}>
        {children}
      </h2>
    </div>
  );
};

export default Heading;
