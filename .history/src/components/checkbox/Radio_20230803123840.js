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
        className="hidden-input"
        class={`w-4 h-4 checked:bg-gradient`}
        {...field}
        {...rest}
      ></input>
      <span class="ml-2 bodycopy text-[--text-meta]">{children}</span>
    </label>
  );
};

export default Radio;
