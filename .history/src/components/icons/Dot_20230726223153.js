import React from "react";

const Dot = ({ className = "", onClick = () => {}, ...props }) => {
  return (
    <span className={className} onClick={onClick} {...props}>
      <svg
        width="2"
        height="2"
        viewBox="0 0 2 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="1" cy="1" r="1" fill={`var(--text-meta)`} />
      </svg>
    </span>
  );
};

export default Dot;
