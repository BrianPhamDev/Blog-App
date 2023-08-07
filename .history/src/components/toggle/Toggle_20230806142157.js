import React from "react";
import PropTypes from "prop-types";

const Toggle = ({ on, onClick, ...rest }) => {
  return (
    <label>
      <input
        type="checkbox"
        className="hidden-input"
        onChange={() => {}}
        onClick={onClick}
      />
      <div className="input">True</div>
    </label>
  );
};

export default Toggle;
