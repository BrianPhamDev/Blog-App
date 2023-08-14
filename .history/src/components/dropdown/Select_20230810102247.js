import React from "react";
import { useDropdown } from "./dropdown-context";

const Select = ({ placeholder, children }) => {
  const { handleToggleDropdown, show } = useDropdown();
  return (
    <>
      <div
        className="flex items-center justify-between p-5 bg-[var(--gray-200)] cursor-pointer font-medium rounded-md h-[54px] text-[var(--inactive)]"
        onClick={handleToggleDropdown}
      >
     {!children ? (
          <span>{placeholder}</span>
        ) : (
          <span>{children}</span>
        )}
          {show ? (
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
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </div>
    </>
  );
};

export default Select;
