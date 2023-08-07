import React from "react";
import PropTypes from "prop-types";

const Toggle = ({ on, onClick, ...rest }) => {
  return (
    <label>
      <input type="checkbox" />
      <div className="input">True</div>
    </label>
  );
};

export default Toggle;
