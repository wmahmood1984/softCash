import React from "react";
import Left from "./components/Left";
import Right from "./components/Right";

const ProjectPreview = () => {
  return (
    <div className=" text-[#B3B3B3] ">
      <div className="grid lg:grid-cols-12 gap-6 mt-5">
        <div className=" lg:col-span-8">
          <Left />
        </div>
        <div className="lg:col-span-4">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
