import React from "react";

const Heading = ({ className = "", children, ...props }) => {
  return (
    <h2 className={`${className} heading-2`} {...props}>
      {children}
    </h2>
  );
};

export default Heading;
