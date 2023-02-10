import React from "react";
import Button from "../../../components/Button";

const Step1 = ({ increaseStep, decreaseStep }) => {
  const list = ["BNB", "BUSD", "USDT", "USDC"];
  return (
    <div>
      <p className="text-primary-text">(*) is required field</p>
      <br />
      <label htmlFor="">
        Token address <span className=" text-red-400">*</span>
      </label>
      <input
        type="text"
        className="bg-[#303D4F] flex-1 border-none outline-none focus:ring-0 block w-full rounded-md mt-1"
        placeholder="0xaD212A1549158203A23f9fC2c45053213f10AfDE"
      />
      <p className="text-sm">Pool creation fee: 0.5 BNB</p>
      <br />
      <p>Currency</p>
      <div className="grid gap-2 ml-2 mt-2">
        {list.map((item, index) => (
          <div key={index}>
            <input type="radio" id={item} name={"currency"} value={item} />
            <label htmlFor={item} className="ml-1">
              {item}
            </label>
          </div>
        ))}
      </div>
      <p className="text-primary-text mt-1 text-sm">
        User will pay with BNB for your token
      </p>

      <p className="mt-5">Fee Options</p>
      <div className="grid gap-2 ml-2 mt-2">
        <div>
          <input type="radio" name={"currency"} id="2" value={"2"} />
          <label htmlFor="2" className="ml-1">
            2% BNB raised only(Recemmended)
          </label>
        </div>
        <div>
          <input type="radio" name={"currency"} id="1" value={"1"} />
          <label htmlFor="1" className="ml-1">
            1% BNB raised + 5 BNB on pool creation
          </label>
        </div>
      </div>
      <div className="bg-[#303D4F] w-full py-3 mt-5 text-center px-4 rounded-lg">
        For auto listing, after you finalize the pool your token will be auto
        listed on DEX
      </div>
      <br />
      <Button sm center onClick={increaseStep}>
        Next
      </Button>
    </div>
  );
};

export default Step1;
