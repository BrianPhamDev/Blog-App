import React from "react";

const Heading = ({ className = "", children, ...props }) => {
  return (
    <h2 className={`&{className} `} {...props}>
      {children}
    </h2>
  );
};

export default Heading;
