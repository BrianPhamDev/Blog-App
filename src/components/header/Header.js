import React, { useState } from "react";
import "./header.scss";
import { IconSearch } from "../icons";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { useAuth } from "../../contexts/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
const menuLinks = [
  // { url: "/", title: "Home" },
  { url: "/blog", title: "Blog" },
  { url: "/contact", title: "Contact" },
];
const Header = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  const getLastName = (displayName) => {
    if (!displayName) return "User";
    const length = displayName.split(" ").length;
    return displayName.split(" ")[length - 1];
  };
  const [inputFocused, setInputFocused] = useState(false);
  const { userInfo } = useAuth();
  // console.log(userInfo);
  return (
    <>
      <div className="header">
        <NavLink to="/">
          <img src="./Logo.svg" alt="Newsiten" className="header-logo" />
        </NavLink>
        {/* <div
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
        </div> */}
        <div className="header-main">
          {!userInfo ? (
            <Button type="button" to="/sign-in">
              Sign In
            </Button>
          ) : (
            <div className="menu flex flex-row items-center justify-center">
              <NavLink to="/manage/posts">Dashboard</NavLink>
              <div className="flex flex-row items-center justify-center">
                <div className="font-semibold">Hello, &nbsp;</div>
                <div className="text-gradient font-semibold">
                  {getLastName(userInfo?.displayName)}
                </div>
              </div>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
