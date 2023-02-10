import React from "react";
import { RiSearch2Line } from "react-icons/ri";
const SearchBox = () => {
  return (
    <div className="mx-auto flex justify-center ">
      <div className=" max-w-[500px] w-full relative">
        <input
          type="text"
          className=" w-full bg-transparent rounded-full focus:ring-0 border-gray-500 focus:border-gray-500 px-5 pr-10  border-2"
          placeholder="Search by id"
        />
        <RiSearch2Line className="absolute right-4 top-1/2 -translate-y-1/2 text-base" />
      </div>
    </div>
  );
};

export default SearchBox;
