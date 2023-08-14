import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
const Description = ({
  name = "",
  type = "text",
  children,
  className,
  control,
  ...props
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <textarea
      className={`${className} p-3 rounded-md w-full placeholder-gray-600 bg-[var(--gray-200)] h-[200px] resize-none border-[var(--background-active)] border border-solid focus:bg-white`}
      id={name}
      style={{ padding: "1rem" }}
      {...field}
      {...props}
    ></textarea>
  );
};

Description.propTypes = {
  // value: PropTypes.string
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.any,
  control: PropTypes.any.isRequired,
};

export default Description;
