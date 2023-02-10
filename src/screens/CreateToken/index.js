import React from "react";

const CreateToken = () => {
  return (
    <div className="text-[#B3B3B3]  pb-20">
      {/* <div className="lg:hidden my-10 text-center">
        <p>This page is only available for desktop view</p>
      </div> */}
      <div className="">
        <div className="mt-5 ">
          <p className="mb-2">(*) is required field.</p>
        </div>
        <div className="grid gap-4 grid-cols-1">
          <CustomInput label={"Name"} />
          <CustomInput label={"Symbol"} />
          <CustomInput label={"Decimals"} />
          <CustomInput label={"Total supply"} />
          <CustomInput label={"Network / Chain"} />
          <CustomInput label={"Router	"} />
        </div>
        <p className="mt-10 mb-4 text-2xl font-bold text-center">Tax Option</p>
        <div className="grid grid-flow-col gap-2 justify-start items-center">
          <CustomCheckBox checked />
          <p className=" text-white font-semibold">
            Select Your Required Buy Tax Options (Max 9% Total)
          </p>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3">
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Auto Liquidity"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Auto Liquidity Wallet Address	"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="ml-2 flex-1">
                <CustomSelect label={"Auto Buybac & Burn"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Auto Buyback Wallet Address"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Token Reflection"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomRadio label={"Select Token Reflection Method"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Marketing"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Marketing Wallet Address"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Staking Reward"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Staking Reward Wallet Address"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Team / Dev"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Team / Dev Wallet Address"} />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="grid grid-flow-col gap-2 justify-start items-center">
          <CustomCheckBox checked />
          <p className=" text-white font-semibold">
            Select Your Required Sell Tax Options (Max 9% Total)
          </p>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3">
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Auto Liquidity"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Auto Liquidity Wallet Address	"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Auto Buybac & Burn"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Auto Buyback Wallet Address"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className=" flex-1 ml-2">
                <CustomSelect label={"Token Reflection"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomRadio label={"Select Token Reflection Method"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <CustomCheckBox />
              </div>
              <div className=" flex-1 ml-2">
                <CustomSelect label={"Marketing"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Marketing Wallet Address"} />
            </div>
          </div>{" "}
          <div className=" grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <CustomCheckBox />
              </div>
              <div className="flex-1 ml-2">
                <CustomSelect label={"Staking Reward"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Staking Reward Wallet Address"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <CustomCheckBox />
              </div>
              <div className="flex-1 ml-2">
                <CustomSelect label={"Team / Dev"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Team / Dev Wallet Address"} />
            </div>
          </div>
        </div>

        <br />
        <div className="grid grid-flow-col gap-2 justify-start items-center mt-4">
          <CustomCheckBox checked />
          <p className=" text-white font-semibold">
            Transfer TAX (Max 2% Total)
          </p>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3">
          <div className=" grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <CustomCheckBox />
              </div>
              <div className="flex-1 ml-2">
                <CustomSelect label={"Send & Recieve"} />{" "}
              </div>
            </div>
            <div className="flex-1  md:ml-2">
              <CustomInput label={"Transfer TAX Reciever Wallet "} />
            </div>
          </div>{" "}
        </div>
        <div className="max-w-max mx-auto">
          <button className="font-bold py-3 px-8 rounded-md text-lg btn_gradient text-white mt-14">
            Create New Token
          </button>
          <p className="text-white mx-auto mt-1">Fee: 1BNB</p>
        </div>
      </div>
    </div>
  );
};

export default CreateToken;

const CustomInput = ({ label, ...props }) => {
  return (
    <div className="bg-[#303D4F] flex border rounded-lg overflow-hidden border-gray-400">
      <div className="bg-[#303D4F] text-white px-2 py-2 border-r border-gray-400 rounded-l-lg font-semibold min-w-[120px] md:min-w-[280px] text-sm sm:text-base ">
        {label}
      </div>
      <input
        type="text"
        className="bg-[#303D4F] flex-1 border-none outline-none focus:ring-0 "
        {...props}
      />
    </div>
  );
};
const CustomRadio = ({ label, ...props }) => {
  const list = ["BNB", "ETH", "USDT", "SOFT", "CAKE", "DOGE"];
  return (
    <div className="bg-[#303D4F] flex flex-col md:flex-row border rounded-lg overflow-hidden border-gray-400 items-center">
      <div className="bg-[#303D4F] text-white px-2 py-2 border-b md:border-b-0 md:border-r border-gray-400 md:rounded-l-lg font-semibold min-w-[120px] md:min-w-[280px] text-sm sm:text-base ">
        {label}
      </div>
      <div className="grid grid-cols-3 p-2 md:grid-cols-none md:grid-flow-col gap-2 ml-2">
        {list.map((item, index) => (
          <div key={index}>
            <input
              type="radio"
              id={item}
              name={label}
              value={item}
              // className="bg-[#303D4F] flex-1 border-none outline-none focus:ring-0 "
              {...props}
            />
            <label htmlFor={item} className="ml-1">
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
const CustomSelect = ({ label, ...props }) => {
  const options = [
    0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
  ];
  return (
    <div className="bg-[#303D4F] flex border rounded-lg overflow-hidden border-gray-400">
      <div className="bg-[#303D4F] text-white px-2 py-2 border-r border-gray-400 rounded-l-lg font-semibold min-w-[80px] md:min-w-[280px] text-sm sm:text-base ">
        {label}
      </div>
      <select
        name=""
        id=""
        className="bg-[#303D4F] text-white flex-1 border-none outline-none focus:ring-0 "
      >
        <option value={null}>Select Tax(%)</option>
        {options.map((val, i) => (
          <option value={val} key={i}>
            {val}%
          </option>
        ))}
      </select>
    </div>
  );
};

const CustomCheckBox = ({ ...props }) => {
  return (
    <input
      type="checkbox"
      className="p-5 bg-[#303D4F] focus:ring-0 rounded-md"
      {...props}
    />
  );
};
