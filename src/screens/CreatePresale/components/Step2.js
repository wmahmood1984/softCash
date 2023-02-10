import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Button from "../../../components/Button";

const Step2 = ({ increaseStep, decreaseStep }) => {
  const [address, setAddress] = useState("");
  const [whitelist, setWhiteList] = useState("");
  const [softCap, setSoftCap] = useState("");
  const [hardCap, setHardCap] = useState("");
  const [minBuy, setMinBuy] = useState(0);
  const [maxBuy, setMaxBuy] = useState(0);
  const [refundType, setRefundType] = useState(0);
  const [router, setRouter] = useState("");
  const [liquidity, setLiquidity] = useState(0);
  const [listingRate, setListingRate] = useState(0);
  const [liquidityLockup, setLiquidityLockup] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [isUsingVesting, setIsUsingVesting] = useState(false);
  const [isUsingTeamVesting, setIsUsingTeamVesting] = useState(false);
  const list = ["BNB", "BUSD", "USDT", "USDC"];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center">
            <p>
              Token Address <span className="text-red-400">*</span>
            </p>
            <p className="hidden sm:flex text-primary-text text-sm  items-center">
              <span>If i spent 1 BNB how many tokens i will recieve</span>
              <span className="ml-1 cursor-pointer">
                <AiOutlineQuestionCircle />
              </span>
            </p>
          </div>
          <CustomInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="234mknjknfgj453456jmngjf87485hjb435nn23k"
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p>Whitelist</p>
            <p className=" text-primary-text hidden sm:block text-xs sm:text-sm">
              <span>You can enable/disable whitelist anytime</span>
            </p>
          </div>
          <CustomInput
            placeholder="0"
            value={whitelist}
            onChange={(e) => setWhiteList(e.target.value)}
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p>
              Softcap (BNB) <span className="text-red-400">*</span>
            </p>
            <p className="hidden md:block text-primary-text text-sm ">
              {"Softcap must be >= 50% of Hardcap!"}
            </p>
          </div>
          <CustomInput
            placeholder="0"
            value={softCap}
            onChange={(e) => setSoftCap(e.target.value)}
          />
        </div>
        <CustomInput
          required
          label="Hardcap (BNB)"
          value={hardCap}
          onChange={(e) => setHardCap(e.target.value)}
        />
        <CustomInput
          required
          label="Minimun buy (BNB)"
          value={minBuy}
          onChange={(e) => setMinBuy(e.target.value)}
        />
        <CustomInput
          required
          label="Maximum buy (BNB)"
          value={maxBuy}
          onChange={(e) => setMaxBuy(e.target.value)}
        />
        <CustomInput
          label="Refund type"
          value={refundType}
          onChange={(e) => setRefundType(e.target.value)}
        />
        <CustomInput
          label="Router"
          value={router}
          onChange={(e) => setRouter(e.target.value)}
        />
        <CustomInput
          label="liquidity (%)"
          required
          value={liquidity}
          onChange={(e) => setLiquidity(e.target.value)}
        />
        <div>
          <div className="flex justify-between items-center">
            <p>
              listing rate<span className="text-red-400">*</span>
            </p>
            <p className=" text-primary-text text-sm ">{"1 BNB = 0 Rat"}</p>
          </div>
          <CustomInput
            placeholder="0"
            value={listingRate}
            onChange={(e) => setListingRate(e.target.value)}
          />
        </div>
      </div>
      <p className=" text-xs text-primary-text ">
        Enter the percentage of raised funds that should be allocated to
        Liquidity on (Min 51%, Max 100%)
      </p>
      <p className=" text-xs mt-4 text-primary-text ">
        If i spend 1 BNB on how many tokens will i recieve? Usually this amount
        is lower than presale rate to allow for a higher listing price on
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="">
          <CustomInput
            type="date"
            label={"Select start time & end time (UTC)"}
            required
          />
        </div>{" "}
        <div className="">
          <CustomInput label={"Liquidity lockup (minutes)"} required />
        </div>
        <div>
          <input type="checkbox" name="" id="vesting" className="mr-1" />
          <label htmlFor="vesting">Using Vesting Contributor?</label>
          <br />

          <input
            type="checkbox"
            name=""
            id="team_vesting"
            className="mr-1 inline-block"
          />
          <label htmlFor="team_vesting">Using Team Vesting?</label>
        </div>
      </div>
      <div className=" grid grid-flow-col gap-2 justify-center mt-10">
        <Button onClick={decreaseStep}>Back</Button>
        <Button onClick={increaseStep}>Next</Button>
      </div>
    </div>
  );
};

export default Step2;
const CustomInput = ({ label, type = "text", required, ...props }) => {
  return (
    <div className="">
      {label && (
        <label>
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        {...props}
        required={required}
        type={type}
        className="bg-[#303D4F] border flex-1 outline-none focus:ring-0 block w-full rounded-md "
      />
    </div>
  );
};
