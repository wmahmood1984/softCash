import React from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiFacebook,
  FiGlobe,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import { HiBellAlert } from "react-icons/hi2";
import { TbBrandTelegram } from "react-icons/tb";

import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import Tag from "../../LaunchPadList/components/Tag";
import { shortAddress } from "../../../web3/helpers";

const Left = () => {
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

  const textBoxClass =
    "flex justify-between items-center border-b border-[#132a4a] pb-2";

  return (
    <div className="md:p-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-[#2ADFF1] text-center">
            Recommended Rank Badges: 3/5
          </p>
          <div className=" bg-[#676767] rounded-full overflow-hidden mt-2">
            <div className="py-1 bg-green-600 w-3/5"></div>
          </div>
        </div>
        <div className=" mt-4 grid grid-cols-5 gap-2 text-sm text-white">
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
      <div className="flex md:flex-row flex-col md:items-center justify-start mt-10">
        <div className="grid grid-flow-col gap-2 items-center">
          <img src="/assets/project_logo.png" className="w-24" alt="" />
          <p className="text-xl">Pure Wallet Fair Launch</p>
        </div>
        <div className="grid grid-flow-col gap-2 md:my-0 my-4 justify-start mx-4">
          {action.map((val, i) => (
            <button key={val.link} className="text-2xl  " onClick={val.handler}>
              {val.icon}
            </button>
          ))}
        </div>
        <div className="max-w-max">
          <Tag type={"ended"} />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-3">
        <div className={`${textBoxClass}`}>
          <p>Presale Address</p>
          <a className="text-primary-text block" href="/">
            <p className="md:block hidden">
              0x2a34040aea4587312b209ecD88507E0b4A832266
            </p>
            <p className=" md:hidden">
              {shortAddress("0x2a34040aea4587312b209ecD88507E0b4A832266")}{" "}
            </p>
          </a>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Token Name</p>
          <p>Pure Wallet</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Token Symbol</p>
          <p>PURE</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Token Decimals</p>
          <p>18</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Token Address</p>
          <a className="text-primary-text block" href="/">
            <p className="md:block hidden">
              0x2a34040aea4587312b209ecD88507E0b4A832266
            </p>
            <p className=" md:hidden text-right">
              {shortAddress("0x2a34040aea4587312b209ecD88507E0b4A832266")}{" "}
            </p>
            <p className="text-right">
              (Do not send BNB to the token address!)
            </p>
          </a>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Total Supply</p>
          <p>1,000,000,000 PURE</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Tokens For Presale</p>
          <p>356,687,000 PURE</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Tokens For Liquidity</p>
          <p>203,311,590 PURE</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Soft Cap</p>
          <p>25 BNB</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Presale Start Time</p>
          <p>2022.11.11 10:00 (UTC)</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Presale End Time</p>
          <p>2022.11.15 18:00 (UTC)</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Listing On</p>
          <p>Pancakeswap</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Liquidity Percent</p>
          <p>60%</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Liquidity Unlocked Time</p>
          <p>2023.11.16 19:15 UTC (in 10 months)</p>
        </div>
      </div>
      <div>
        <div className="mt-10 flex flex-col md:flex-row  md:justify-between md:items-center">
          <p className="text-2xl font-semibold mb-4 md:mb-0">Description</p>
          <div className="grid grid-flow-col gap-2  justify-start ">
            {social.map((val, i) => (
              <a
                key={val.link}
                className="text-3xl  text-primary-text"
                href={val.link}
              >
                {val.icon}
              </a>
            ))}
          </div>{" "}
        </div>
        <p className="mt-6">
          Pure Wallet Finance Limited Is a 🇬🇧UK Registered Company. PURE Is a
          Web3.0 Project With Some Impressive Live Utilities, Like; ✅PURE CEX
          ✅PURE Mobile Wallet ✅PURE Dapp, Staking, Swap, Profit Calculator
          ✅1064% APY Initially ✅PURE Introducing World's First 100% Halal
          Dynamic Staking 🔐Secured & Dump Proof 🎁Big Winning Opportunity For
          Early Participants 🟢Low Buy & Sell Tax 🔓No Unlocked Token 📊CMC & CG
          Fast Track 🟢PR, Banner Ads, Influencer, Partnership & Huge More
          Marketing 🧑‍💻Experienced Dev Team.
        </p>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mt-6"
        ></iframe>
        <div className="mt-10 flex justify-between items-center">
          <p className="text-2xl font-semibold">Lock Records</p>
          <a href="/" className="text-primary-text">
            View All
          </a>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-4">
          <div className={`${textBoxClass}`}>
            <p>Amount</p>
            <a className="text-primary-text " href="/">
              Unlock time (UTC)
            </a>
          </div>{" "}
          <div className={`${textBoxClass}`}>
            <p>50,000,000</p>
            <a className="text-primary-text " href="/">
              view
            </a>
          </div>{" "}
          <div className={`${textBoxClass}`}>
            <p>50,000,000</p>
            <a className="text-primary-text " href="/">
              view
            </a>
          </div>{" "}
          <div className={`${textBoxClass}`}>
            <p>20,000,000</p>
            <a className="text-primary-text " href="/">
              view
            </a>
          </div>{" "}
        </div>

        <div className="mt-7 border-b border-[#132a4a]   pb-2">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="text-left">Amount</th>
                <th>Cycle</th>
                <th>TGE</th>
                <th className="text-right">Unlock time(UTC)</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="mt-6">
          <div className="grid gap-1 grid-flow-col justify-center items-center ">
            <button className=" h-6 w-6 text-white grid place-content-center bg-[#888b9a]">
              {" "}
              <FiChevronLeft />
            </button>
            <button className=" h-6 w-6 text-white grid place-content-center bg-[#585d71]">
              1
            </button>
            <button className=" h-6 w-6 text-white grid place-content-center bg-[#888b9a]">
              <FiChevronRight />
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="disclaimer">
          <p>
            <strong>Disclaimer:</strong> The information handed shall not in any
            way constitute a recommendation as to whether you should invest in
            any product bandied. We undertake no liability for any loss
            occasioned to any person performing or abstaining from action as an
            aftereffect of any material delivered or published.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Left;
