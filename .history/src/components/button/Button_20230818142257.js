import React from "react";
import "./button.scss";
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * @param {*} onClick Handler onClick
 *@requires
 * @param {string} type Type of button 'button' | 'submit'
 * @returns
 */

const Button = ({
  type = "button",
  onClick = () => {},
  className,
  children,
  isLoading,
  to,
  kind = "primary",
  ...props
}) => {
  const child = !!isLoading ? <Spinner></Spinner> : children;
  if (to !== "" && typeof to === "string")

  let buttonStyleClass = "";
  if (kind === "secondary") {
    buttonStyleClass = "text-primary bg-white";
  } else if (kind === "primary") {
    buttonStyleClass = "text-white bg-primary";
  } else if (kind === "ghost") {
    buttonStyleClass = "text-primary bg-primary-light";
  }
  return (
    <NavLink to={to} {...props}>
      <button className="w-fit px-[26px] whitespace-nowrap text-white rounded-md font-semibold cursor-pointer text-lg h-[50px] flex items-center justify-center background-gradient">
        {children}
      </button>
    </NavLink>
  );

  return (
    <button type={type} className={`button ${className}`} {...props}>
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]).isRequired,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
