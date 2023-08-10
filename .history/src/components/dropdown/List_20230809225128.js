import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return <>{show && <div className="">{children}</div>}</>;
};

export default List;
