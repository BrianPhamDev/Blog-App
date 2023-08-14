import React from "react";
import "../input";
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
    <div className="inputWrapper">
      <input
        id={name}
        type={type}
        className={`${className}`}
        {...field}
        {...props}
      >
        <textarea></textarea>
      </input>
    </div>
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
