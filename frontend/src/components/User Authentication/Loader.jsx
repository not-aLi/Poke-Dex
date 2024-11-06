import React from "react";

const Loader = ({img}) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <img src={img} alt="Loading..." className="size-10" />
    </div>
  );
};

export default Loader;
