import React from "react";

const Spinner = ({ size = "8", borderSize = "4" }) => {
  return (
    <div
      class={`inline-block h-${size} w-${size} animate-spin rounded-full border-${borderSize} border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    >
      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Spinner;
