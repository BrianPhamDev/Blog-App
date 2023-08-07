import React from "react";
import PropTypes from "prop-types";

const Toggle = ({ on, onClick, ...rest }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={on}
        className="hidden-input"
        onChange={() => {}}
        onClick={onClick}
      />
      <div
        className={`inline-block w-[70px] h-[42px] relative cursor-pointer rounded-full p-1 transition-all ${
          on ? "bg-green-500" : "var(--gray-200)"
        }`}
        {...rest}
      >
        True
      </div>
    </label>
  );
};

export default Toggle;
