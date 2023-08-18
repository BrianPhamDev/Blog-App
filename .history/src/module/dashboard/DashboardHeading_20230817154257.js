import React from "react";

const DashboardHeading = ({ children }) => {
  return (
    <h1 className="dashboard-heading heading-2 text-gradient mb-8">
      {children}
    </h1>
  );
};

export default DashboardHeading;
