import React from "react";
import { useState } from "react";
import LaunchPad from "./components/LaunchPad";

const LaunchPadList = () => {
  const [selected, setSelected] = useState(0);
  const tabs = ["All launchpads", "Advanced Mode", "My Contributions"];

  const handleSelect = (i) => {
    setSelected(i);
  };
  const filter = [
    "Kyc",
    "Upcoming",
    "Inprogress",
    "Filled",
    "Ended",
    "Canceled",
  ];
  const sort = [
    "Hard Cap",
    "Soft Cap",
    "Lp percent ",
    "Start Time",
    "End Time",
  ];
  return (
    <div className="  text-white">
      <h2 className="text-3xl mt-6 font-semibold">Current Presales</h2>
      <div className=" grid grid-flow-col justify-center items-center gap-4 mt-6 pb-5 border-b border-gray-500">
        {tabs.map((tab, index) => (
          <button
            className={`block py-2 border-b ${
              index === selected
                ? "border-primary-border"
                : " border-transparent"
            }`}
            onClick={() => handleSelect(index)}
            key={index}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex mt-6  flex-col md:flex-row ">
        <input
          type={"text"}
          className="flex-1 bg-[#303D4F] rounded  border-none outline-none focus:ring-0 "
          placeholder="Enter token name or token symbol"
        />
        <div className="grid grid-flow-col gap-2 md:ml-2 mt-2 md:mt-0">
          <select
            name=""
            id=""
            className=" bg-[#303D4F] rounded  border-none outline-none focus:ring-0 "
          >
            <option value="">Filter By</option>
            {filter.map((token, index) => (
              <option value="" key={index}>
                {token}
              </option>
            ))}
          </select>{" "}
          <select
            name=""
            id=""
            className=" bg-[#303D4F] rounded  border-none outline-none focus:ring-0"
          >
            <option value="">Sort By</option>
            {sort.map((token, index) => (
              <option value="" key={index}>
                {token}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
      </div>
    </div>
  );
};

export default LaunchPadList;
