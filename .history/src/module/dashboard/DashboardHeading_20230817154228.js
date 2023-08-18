import React from "react";

const DashboardHeading = ({ children }) => {
  return (
    <div className="dashboard-heading heading-2 text-gradient mb-8">
      {children}
    </div>
  );
};

export default DashboardHeading;
