import React, { useState } from "react";
import "./header.scss";
import { IconSearch } from "../icons";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import useAuth from "../../contexts";

const menuLinks = [
  // { url: "/", title: "Home" },
  { url: "/blog", title: "Blog" },
  { url: "/contact", title: "Contact" },
];
const Header = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const { userInfo } = useAuth();

  return (
    <>
      <div className="header">
        <NavLink to="/">
          <img src="./Logo.svg" alt="Newsiten" className="header-logo" />
        </NavLink>
        <div
          className={`search ${
            inputFocused ? "bg-white" : "bg-backgroundInactive"
          }`}
        >
          <span className="search-icon">
            <IconSearch></IconSearch>
          </span>
          <input
            type="text"
            className="search-input group-hover:bg-white"
            placeholder="Search posts..."
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
        </div>
        <div className="header-main">
          <div className="menu">
            {menuLinks.map((item) => (
              <li className="menu-item" key={item.title}>
                <NavLink to={item.url} className="menu-link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </div>
          <Button to="/sign-in">Sign In</Button>
          {/* <button className="menu-button">Sign In</button> */}
        </div>
      </div>
    </>
  );
};

export default Header;
