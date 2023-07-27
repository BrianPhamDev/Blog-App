import React, { Children } from "react";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default Layout;
