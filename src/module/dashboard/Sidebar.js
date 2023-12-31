import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";

const sidebarLinks = [
  {
    title: "Post",
    url: "/manage/posts",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Category",
    url: "/manage/category",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
  },
  {
    title: "User",
    url: "/manage/user",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Logout",
    url: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    ),
    onClick: () => {
      signOut(auth);
    },
  },
];

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar-wrapper max-w-[300px] bg-white border boder-[var(--inactive)] rounded-xl px-5 py-[40px] flex flex-col gap-5 h-fit">
      {/* <div className="sidebar-logo mb-5">
        <img src="./Logo.svg" alt="Newsiten" className="max-w-[120px]" />
      </div> */}
      {sidebarLinks.map((item) => {
        if (item.onClick)
          return (
            <div
              key={item.url}
              onClick={item.onClick}
              className={`menu-item flex gap-2 items-center px-3 py-4 bg-[var(--gray-200)] cursor-pointer hover-active rounded-sm`}
            >
              <div className="menu-icon">{item.icon}</div>
              <div className="menu-title0.">{item.title}</div>
            </div>
          );
        return (
          <NavLink
            key={item.url}
            to={item.url}
            className={`menu-item flex gap-2 items-center px-3 py-4 bg-[var(--gray-200)] cursor-pointer hover-active rounded-sm`}
          >
            <div className="menu-icon">{item.icon}</div>
            <div className="menu-title0.">{item.title}</div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
