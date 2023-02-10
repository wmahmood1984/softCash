import React, { useState } from "react";
import Banner from "../../components/Banner";
import CustomStepper from "../../components/stepper";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const CreatePresale = () => {
  const [step, setStep] = useState(0);

  const increaseStep = () => {
    setStep((prev) => prev + 1);
  };

  const decreaseStep = () => {
    setStep((prev) => prev - 1);
  };
  const Steps = () => {
    switch (step) {
      case 0:
        return (
          <Step1 increaseStep={increaseStep} decreaseStep={decreaseStep} />
        );
      case 1:
        return (
          <Step2 increaseStep={increaseStep} decreaseStep={decreaseStep} />
        );
      case 2:
        return (
          <Step3 increaseStep={increaseStep} decreaseStep={decreaseStep} />
        );
      case 3:
        return (
          <Step4 increaseStep={increaseStep} decreaseStep={decreaseStep} />
        );
      default:
        return <div />;
    }
  };

  return (
    <div className="">
      <div className="md:my-20 ">
        <div className=" hidden md:block">
          <CustomStepper step={step} />
        </div>
        <div className="mt-10">
          <Steps />
        </div>
      </div>
    </div>
  );
};

export default CreatePresale;
