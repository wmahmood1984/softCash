import React from "react";
import Spinner from "./Spinner";

const Loader = () => {
  return (
    <div className="min-h-[200px] flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loader;
