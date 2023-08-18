import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <label className="flex items-center mb-4">
      <input
        checked={checked}
        type="radio"
        className={`w-4 h-4 relative ${
          checked ? "radio-checked" : "bg-gray-200"
        }`}
        {...field}
        {...rest}
      ></input>
      <span
        className={`ml-2 bodycopy ${
          checked ? "text-[black]" : "text-[var(--text-meta)]"
        }`}
      >
        {children}
      </span>
    </label>
  );
};

export default Radio;
