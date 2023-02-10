import React from "react";
import {
  AiFillExclamationCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      {" "}
      <HotListDesk />
      <HotListMobile />
      <div className="mt-5">
        <img
          src="/assets/middle-banner.jpg"
          className="mx-auto  max-w-max w-full"
          alt=""
        />
      </div>
      <div className=" w-full border border-primary-border rounded-xl   p-2 flex mt-4 overflow-x-auto items-center">
        <div className=" grid grid-flow-col gap-1 justify-start items-center">
          <img src="/assets/flash.png" className="w-4" alt="" />
          <p>Presale Trending:</p>
        </div>
        <div className=" flex flex-1 justify-between">
          <p className="mx-4 shrink-0">#1: BTC</p>
          <p className="mx-4 shrink-0">#2: ETH</p>
          <p className="mx-4 shrink-0">#3: BNB</p>
          <p className="mx-4 shrink-0">#4: PURE</p>
          <p className="mx-4 shrink-0">#5: SHIB</p>
          <p className="mx-4 shrink-0">#6: XRP</p>
          <p className="mx-4 shrink-0">#7: EOS</p>
          <p className="mx-4 shrink-0">#8: LUNA</p>
          <p className="mx-4 shrink-0">#9: FINU</p>
          <p className="mx-4 shrink-0">#10: RDC</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const HotListDesk = () => {
  return (
    <div className=" w-full border border-primary-border rounded-xl hidden md:flex justify-between items-center ">
      <div className="text-2xl font-bold p-4 text-center text-primary-text border-r border-primary-border">
        Launched <br /> Hot List
      </div>
      <div className="flex-1 overflow-x-hidden px-4 w-full">
        <div className=" items flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
            <div
              key={val}
              className=" border border-primary-border rounded-xl min-w-[200px]"
            >
              <div className=" flex items-center justify-between p-4">
                <div className="launch-middle-icon">
                  <img
                    src="assets/project_logo.png"
                    alt="launch-middle-icon"
                    className="w-14"
                  />
                </div>
                <div className=" text-sm ml-6">
                  <h2>#{val}: PURE</h2>
                  <h3>Pure Wallet</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" h-full p-4 border-l border-primary-border relative">
        <button className="absolute text-white top-2 right-2">
          <AiOutlineExclamationCircle />
        </button>
        <div className="grid grid-flow-col gap-2">
          <img src="/assets/promotedLogo.png" alt="" />
          <div className="text-sm">
            <p>FINU</p>
            <p>Fifa INU</p>
          </div>
        </div>
        <a
          href="/"
          className=" grid grid-flow-col justify-end gap-1 text-primary-text text-xs items-center mt-2"
        >
          {" "}
          <FaChartBar />
          <span>view chart</span>
          <AiFillExclamationCircle />
        </a>
      </div>
    </div>
  );
};
const HotListMobile = () => {
  return (
    <div className="md:hidden w-full border border-primary-border rounded-xl  ">
      <div className="flex items-center justify-between border-b border-primary-border">
        <div className="text-2xl font-bold p-4 text-center text-primary-text border-r border-primary-border">
          Launched <br /> Hot List
        </div>
        <div className=" h-full p-4 border-l border-primary-border relative">
          <button className="absolute text-white top-2 right-2">
            <AiOutlineExclamationCircle />
          </button>
          <div className="grid grid-flow-col gap-2">
            <img src="/assets/promotedLogo.png" alt="" />
            <div className="text-sm">
              <p>FINU</p>
              <p>Fifa INU</p>
            </div>
          </div>
          <a
            href="/"
            className=" grid grid-flow-col justify-end gap-1 text-primary-text text-xs items-center mt-2"
          >
            {" "}
            <FaChartBar />
            <span>view chart</span>
            <AiFillExclamationCircle />
          </a>
        </div>
      </div>
      <div className="flex-1 overflow-x-hidden px-4 w-full py-2">
        <div className=" items flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
            <div
              key={val}
              className=" border border-primary-border rounded-xl min-w-[200px]"
            >
              <div className=" flex items-center justify-between p-4">
                <div className="launch-middle-icon">
                  <img
                    src="assets/project_logo.png"
                    alt="launch-middle-icon"
                    className="w-14"
                  />
                </div>
                <div className=" text-sm ml-6">
                  <h2>#{val}: PURE</h2>
                  <h3>Pure Wallet</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
