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
  let buttonStyleClass = "";
  const child = !!isLoading ? <Spinner></Spinner> : children;
  if (kind === "primary") {
    buttonStyleClass = `button !text-white ${
      isLoading ? "opacity-50 pointer-events-none" : ""
    }`;
  } else if (kind === "secondary") {
    buttonStyleClass = "text- bg-";
  } else if (kind === "ghost") {
    buttonStyleClass = "text- bg-";
  }

  if (to !== "" && typeof to === "string")
    return (
      <NavLink to={to} {...props}>
        <button className={`${buttonStyleClass}`}>{children}</button>
      </NavLink>
    );

  return (
    <button
      type={type}
      className={`button ${className} ${
        isLoading ? "opacity-50 pointer-events-none" : ""
      }`}
      {...props}
    >
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
