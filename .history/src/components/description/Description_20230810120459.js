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
    <textarea className="p-3 rounded-md w-full placeholder-gray-600 border-1 bg-[var(--gray-200)] h-[200px] resize-none"></textarea>
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
