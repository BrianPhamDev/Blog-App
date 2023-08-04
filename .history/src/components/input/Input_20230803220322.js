import React from "react";
import "./input.scss";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
const Input = ({
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
  const hasIcon = children ? "input has-icon" : "input";
  return (
    <div className="inputWrapper">
      <input
        id={name}
        type={type}
        className={`${hasIcon} ${className}`}
        {...field}
        {...props}
      />
      {children ? <div className="input-icon">{children}</div> : null}
    </div>
  );
};

Input.propTypes = {
  // value: PropTypes.string
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.any,
  control: PropTypes.any.isRequired,
};

export default Input;
