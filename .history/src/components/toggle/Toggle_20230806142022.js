import React from "react";
import PropTypes from "prop-types";

const Toggle = ({ control }) => {
  return (
    <label>
      <input type="checkbox" control={control} />
      <div className="input">True</div>
    </label>
  );
};

export default Toggle;
