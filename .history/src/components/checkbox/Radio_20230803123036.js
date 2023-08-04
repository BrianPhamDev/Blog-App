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
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        {...field}
        {...rest}
      ></input>
      <span class="ml-2 bodycopy text-[--inactive]">{children}</span>
    </label>
  );
};

export default Radio;
