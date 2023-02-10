import React from "react";
import { MdOutlineLink } from "react-icons/md";

const CustomInput = ({ name, id, label, type = "text", ...props }) => {
  return type === "file" ? (
    <div className="w-full mt-2">
      <p className="text-sm mb-1">{label}</p>

      <label
        htmlFor={id}
        className="flex flex-col justify-start items-center w-full h-10 rounded-lg border-2 border-gray-500 border-dashed cursor-pointer bg-white"
      >
        <div className="w-full px-3 h-full flex items-center justify-between">
          <p>Choose File</p>
          <MdOutlineLink className="text-xl" />
        </div>
        <input type="file" className="hidden" id={id} name={name} {...props} />
      </label>
    </div>
  ) : (
    <div>
      <label htmlFor={id} className="text-sm mb-2 ">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="block rounded-xl w-full bg-transparent border-2 border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500"
        name={name}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
