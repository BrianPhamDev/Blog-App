import React from "react";

const List = () => {
  return (
    <>
      {show && (
        <div className="absolute top-full left-0 w-full bg-white shadow-sm z-20">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
