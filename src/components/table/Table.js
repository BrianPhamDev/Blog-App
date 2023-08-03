import React from "react";
import "./table.scss";

const Table = ({ children }) => {
  return (
    <div className="table">
      <table>{children}</table>
    </div>
  );
};

export default Table;
