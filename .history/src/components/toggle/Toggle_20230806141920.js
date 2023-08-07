import React from "react";

const Toggle = ({ control }) => {
  return (
    <label>
      <input type="checkbox" control={control} />
      <div className="">True</div>
    </label>
  );
};

export default Toggle;
