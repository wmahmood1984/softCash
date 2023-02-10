import { ThemeContext } from "@emotion/react";
import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Button from "../../../components/Button";

const Step2 = ({   increaseStep,
  decreaseStep,
  token,
  handleChange,
  SoftCap,
  setSoftCap,
  hardCap,
  setHardCap,
  min,
  setMin,
  max,
  setMax,
  refund,
  setRefund,
  router,
  setRouter,
  liquidity,
  setLiquidity,
  listingRate,
  setListingRate,
  IDOstart,
  setIdoStart,
  liquidityLock,
  setLiquidityLock,
  IDOEnd,
  Allocaiton1,
  setAllocation1,
  Allocaiton2,
  setAllocation2,
  Allocaiton3,
  setAllocation3,
  setIDOEnd,
  noOfToken,
  setNoOFTokens,
  setPrice,
  price,
  initialVesting,
  setInitialVesting,
  vesting,
  setVesting,
  vestingMonths,
  setVestingMonths, }) => {
  const [address, setAddress] = useState("");
  const [whitelist, setWhiteList] = useState("");
///  const [softCap, setSoftCap] = useState("");
//  const [hardCap, setHardCap] = useState("");
  const [minBuy, setMinBuy] = useState(0);
  const [maxBuy, setMaxBuy] = useState(0);
  const [refundType, setRefundType] = useState(0);
//  const [router, setRouter] = useState("");
//  const [liquidity, setLiquidity] = useState(0);
//  const [listingRate, setListingRate] = useState(0);
//  const [liquidityLockup, setLiquidityLockup] = useState(0);
//  const [startDate, setStartDate] = useState(new Date());
  const [isUsingVesting, setIsUsingVesting] = useState(false);
  const [isUsingTeamVesting, setIsUsingTeamVesting] = useState(false);
  const [isWhiteList, setIsWhiteList] = useState(false);
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
            placeholder="234mknjknfgj453456jmngjf87485hjb435nn23k"
          />
        </div>
        {/* <div>
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
        </div> */}
        <div>
              <FormControl fullWidth>
                {/* <FormLabel id="demo-row-radio-buttons-group-label">
                  <p></p>
                </FormLabel> */}
                <div className="flex items-center justify-between">
                  <p>WhiteList</p>
                  <p className="  text-violet-500 dark:text-violet-300 hidden sm:block text-xs sm:text-sm">
                    <span>You can enable/disable whitelist anytime</span>
                  </p>
                </div>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value={false}
                    control={
                      <Radio
                        checked={!isWhiteList}
                        onChange={() => setIsWhiteList(false)}
                      />
                    }
                    label="Disable"
                  />
                  <FormControlLabel
                    value={true}
                    control={
                      <Radio
                        checked={isWhiteList}
                        onChange={() => setIsWhiteList(true)}
                      />
                    }
                    label="Enable"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {isWhiteList && (
              <div>
                <div className="flex justify-between items-center">
                  <p>Whitelist</p>
                  <a
                    href="/whitelist-sample.csv"
                    download
                    className="text-primary-400 text-xs"
                  >
                    Download Sample File
                  </a>
                </div>
                <div
                  className="dark:bg-dark-500 border border-lightDark rounded-md"
                  style={{ height: "56px" }}
                >
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="file"
                    accept=".csv"
                    className=" bg-transparent  w-full h-full text-gray-500 p-2 py-2 focus:outline-none"
                  />
                </div>
              </div>
            )}
        <div>
          <div className="flex justify-between items-center">
            <p>
              Softcap 
              {`${
                    window.ethereum?.networkVersion == 97 ? "(BNB)" : "(Eth)"
                  }`}
               <span className="text-red-400">*</span>
            </p>
            <p className="hidden md:block text-primary-text text-sm ">
              {"Softcap must be >= 50% of Hardcap!"}
            </p>
          </div>
          <CustomInput
                validation={"number"}
                setValue={setSoftCap}
                value={SoftCap}
                placeholder="0"
              />
        </div>
        <CustomInput
              validation={"number"}
              value={hardCap}
              setValue={setHardCap}
              required
              label={`HardCap ${`${
                window.ethereum?.networkVersion == 97 ? "(BNB)" : "(Eth)"
              }`}`}
        />
        <CustomInput
              validation={"number"}
              value={min}
              setValue={setMin}
              required
              label={`Minimum buy ${
                window.ethereum?.networkVersion == 97 ? "(BNB)" : "(Eth)"
              }`}
        />
        <CustomInput
    validation={"number"}
    value={max}
    setValue={setMax}
    required
    label={`Maximum buy ${
      window.ethereum?.networkVersion == 97 ? "(BNB)" : "(Eth)"
    }`}
        />
        {/* <CustomInput
          label="Refund type"
          value={refundType}
          onChange={(e) => setRefundType(e.target.value)}
        /> */}
        <CustomInput
                validation={"address"}
                value={router}
                setValue={setRouter}
                label="Router"
        />
        <CustomInput
              validation={"number"}
              value={liquidity}
              setValue={setLiquidity}
              label="liquidity (%)"
              required
        />
        <div>
              <p>
                Refund
                <span className="text-red-400">*</span>
              </p>
              <CustomSelect
                id="Refund"
                label="Refund"
                value={refund}
                setValue={setRefund}
                list={["Refund", "Burn"]}
              />
            </div>
        <div>
          <div className="flex justify-between items-center">
            <p>
              listing rate<span className="text-red-400">*</span>
            </p>
            <p className=" text-primary-text text-sm ">{"1 BNB = 0 Rat"}</p>
          </div>
          <CustomInput
                validation={"number"}
                value={listingRate}
                setValue={setListingRate}
                placeholder="0"
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
            type="datetime-local"
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
const CustomInput = ({ label,value,setValue,validation, type = "text", required, ...props }) => {
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
        value={value}
        onChange={(e) => {
          if (validation == "number") {
            if (!isNaN(e.target.value)) {
              setValue(e.target.value);
            } else {
              toast .error("not a valid number");
            }
          } else if (validation == "address") {
            if (
              e.target.value.slice(0, 2) == "0x" &&
              e.target.value.length == 42
            ) {
              setValue(e.target.value);
            } else {
              toast.error("not a valid address");
            }
          } else {
            setValue(e.target.value);
          }
        }}
        className="bg-[#303D4F] border flex-1 outline-none focus:ring-0 block w-full rounded-md "
      />
    </div>
  );
};



const CustomSelect = ({ list, id, label, value, setValue }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        theme === "dark"
          ? "custom-select"
          : "dark:bg-dark-500 border border-lightDark rounded-md"
      }`}
    >
      <FormControl size="small" fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
       className="bg-[#303D4F] border flex-1 outline-none focus:ring-0 block w-full rounded-md "
          labelId={id}
          // id="demo-simple-select"
          value={value}
          label={label}
          onChange={(e) => setValue(e.target.value)}
        >
          {list.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
