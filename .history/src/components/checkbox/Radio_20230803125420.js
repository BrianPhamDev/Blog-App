import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <label class="flex items-center mb-4">
      <input
        checked={checked}
        type="radio"
        className=""
        class={`w-4 h-4 relative ${checked ? "radio-checked" : "bg-gray-200"}`}
        {...field}
        {...rest}
      ></input>
      <span
        class={`ml-2 bodycopy ${
          checked ? "text-[black]" : "text-[--text-meta]"
        }`}
      >
        {children}
      </span>
    </label>
  );
};

export default Radio;
