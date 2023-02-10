import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="md:mx-10 ">
      <div className=" max-w-[100%] md:max-w-[90%] relative text-white  overflow-hidden">
        <BiSearchAlt2 className=" absolute top-1/2 left-3 -translate-y-1/2 text-xl" />
        <input
          type="text"
          className="w-full py-1 px-10 text-white gradient border-primary-border rounded-full focus:ring-0 focus:outline-none focus:border-primary-border "
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
