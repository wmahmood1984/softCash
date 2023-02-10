import { useWeb3React } from "@web3-react/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import { LaunchPadABI, LaunchPadAbi, LaunchPadAdd, rpcObj } from "../../config";
import LaunchPad from "./components/LaunchPad";

const LaunchPadList = () => {
  const { account, library, chainId } = useWeb3React();
  const [Data, setData] = useState();
  const [subData, setSubtData] = useState();
  const [filterA, setFilter] = useState();
  const [sortA, setSort] = useState();
  const web3 = chainId ?  new Web3(
    new Web3.providers.HttpProvider(
      rpcObj[`${chainId}`]
    )
  ) : new Web3(
    new Web3.providers.HttpProvider(
      "https://goerli.infura.io/v3/2d0256aba07e4704add58fd0713e24d5"
    )
  );
  const navigate = useNavigate();



  
  const myContract = chainId
    ? new web3.eth.Contract(LaunchPadABI, LaunchPadAdd[`${chainId}`])
    : new web3.eth.Contract(LaunchPadABI, LaunchPadAdd[`5`]);
 
  useEffect(() => {
    const abc = async () => {
      const data = await myContract.methods.getPoolDetails().call();

      setData(data[0]);
      setSubtData(data[1]);
      console.log("live",data[1]);
    };
    abc();
  }, [account]);





  const filterArray = ["upComing", "InProgress", "Filled", "Cancelled"];
  const sortArray = ["HardCap", "SoftCap", "LPPercent", "Start Time"];

  const now = new Date().getTime() / 1000;

  const originalData = Data && [...Data];
  const originalDataS = subData && [...subData];

  const live =
    Data &&
    Data.filter(
      (item) =>
        item._noOfTokens_price_max_min_vesting_month_start_end[6] < now &&
        item._noOfTokens_price_max_min_vesting_month_start_end[7] > now
    );
  const UpComing =
    Data &&
    Data.filter(
      (item) => item._noOfTokens_price_max_min_vesting_month_start_end[6] > now
    );
  const _end =
    Data &&
    Data.filter(
      (item) => item._noOfTokens_price_max_min_vesting_month_start_end[7] < now
    );
  const cancelled = [];

  const filterFunction = (ind) => {
    setFilter(ind);
  };

  const setSortFun = (crit) => {
    setSort(crit);
    var arraytemp = [...Data];
    var sortedArray =
      crit == 0
        ? arraytemp.sort((a, b) => a[4][2] - b[4][2])
        : crit == 1
        ? arraytemp.sort((a, b) => a[4][3] - b[4][3])
        : crit == 2
        ? arraytemp.sort((a, b) => a[4][11] - b[4][11])
        : crit == 3
        ? arraytemp.sort((a, b) => a[4][5] - b[4][5])
        : [];
    setData(sortedArray);
  };



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
