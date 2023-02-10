import React from "react";
import Tag from "./Tag";
import { FiFacebook, FiGlobe, FiInstagram, FiTwitter } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { HiBellAlert } from "react-icons/hi2";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
// import { Link } from "react-router-dom";
import Button from "../../../components/Button";
const LaunchPad = () => {
  const social = [
    {
      icon: <FiGlobe />,
      link: "/",
    },
    {
      icon: <FiFacebook />,
      link: "/",
    },
    {
      icon: <TbBrandTelegram />,
      link: "/",
    },
    {
      icon: <FiTwitter />,
      link: "/",
    },
    {
      icon: <FiInstagram />,
      link: "/",
    },
  ];
  const action = [
    {
      icon: <HiBellAlert />,
      handler: () => {},
    },
    {
      icon: <AiOutlineShareAlt />,
      handler: () => {},
    },
    {
      icon: <AiOutlineHeart />,
      handler: () => {},
    },
  ];

  const data = [
    {
      title: "Soft Cap",
      info: "100 BNB",
    },
    {
      title: "Hard Cap",
      info: "200 BNB",
    },
    {
      title: "Liquidity %",
      info: "70%",
    },
    {
      title: "Lockup Time",
      info: "365 Days",
    },
    {
      title: "Sale Start Time",
      info: "Jan 30, 2023  16:00 UTC",
    },
    {
      title: "Sale End Time",
      info: "Feb 6, 2023  18:00 UTC",
    },
  ];
  return (
    <div className="launchpad_bg_gradient border rounded-xl border-[#707070] p-4">
      <div className=" border rounded-xl border-[#707070] p-4">
        <p className="text-[#2ADFF1] text-center">
          Recommended Rank Badges: 3/5
        </p>
        <div className=" bg-[#676767] rounded-full overflow-hidden mt-2">
          <div className="py-1 bg-green-600 w-3/5"></div>
        </div>
        <div className=" mt-4 grid grid-cols-5 gap-2 text-sm">
          <a href="/" className="py-1 text-center rounded-md bg-[#00afec]">
            Audit
          </a>{" "}
          <a href="/" className="py-1 text-center rounded-md bg-[#007bff]">
            KYC
          </a>{" "}
          <a href="/" className="py-1 text-center rounded-md bg-[#f4a41b]">
            Secure
          </a>{" "}
          <a href="/" className="py-1 text-center rounded-md bg-[#23d160]">
            Audit
          </a>{" "}
          <a href="/" className="py-1 text-center rounded-md bg-[#dd5ff7]">
            Super
          </a>{" "}
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-flow-col gap-2 items-center justify-start">
          <img src="/assets/project_logo.png" className="w-16" alt="" />
          <p>Pure Wallet Fair Launch</p>
          <Tag type={"upcoming"} small />
        </div>
        <div className=" flex justify-between items-center my-5 text-gray-400">
          <div className="grid grid-flow-col gap-2  justify-start ">
            {social.map((val, i) => (
              <a key={val.link} className="text-2xl  " href={val.link}>
                {val.icon}
              </a>
            ))}
          </div>{" "}
          <div className="grid grid-flow-col gap-2  justify-start ">
            {action.map((val, i) => (
              <button
                key={val.link}
                className="text-2xl  "
                onClick={val.handler}
              >
                {val.icon}
              </button>
            ))}
          </div>
        </div>
        <div className=" mb-6 text-[#B3B3B3]">
          <p>Progress (0.00%)</p>
          <div className=" bg-white rounded-full overflow-hidden mt-1">
            <div className="py-1 bg-green-600 w-0"></div>
          </div>
          <div className=" flex justify-between items-center mt-1">
            <p>0 BNB</p>
            <p>200 BNB</p>
          </div>
        </div>
        {data.map((val, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-2  border border-[#707070] text-[#B3B3B3] font-semibold"
          >
            <p>{val.title}</p>
            <p>{val.info}</p>
          </div>
        ))}
        <div className=" flex justify-between items-center mt-2 ">
          <p className="text-[#B3B3B3]">Sale Starts In: 04:09:21:15</p>
          <Button
            sm
            link
            to={"/project_preview"}
            className="bg-[#07A0E3] py-2 px-4 rounded-full"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LaunchPad;
