import React from "react";

const Toggle = ({ control }) => {
  return (
    <label>
      <input type="checkbox" control={control} />
      <div className="p-3 rounded-md w-full placeholder-gray-600">True</div>
    </label>
  );
};

export default Toggle;
