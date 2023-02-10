import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

import Button from "../../../components/Button";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { RiGithubLine, RiTelegramLine } from "react-icons/ri";
import { ImReddit } from "react-icons/im";
const Step3 = ({ increaseStep, decreaseStep }) => {
  const [logo, setLogo] = useState("");
  const [description, setDescription] = useState("");

  const [values, setValues] = useState({
    website: "",
    facebook: "",
    twitter: "",
    github: "",
    telegram: "",
    instagram: "",
    discord: "",
    reddit: "",
  });
  const inputList = [
    {
      label: "Website",
      name: "website",
      placeholder: "https://google.com",
      required: true,
      icon: <IoIosGlobe />,
    },
    {
      label: "Facebook",
      name: "facebook",
      placeholder: "https://google.com",
      required: false,
      icon: <FiFacebook />,
    },
    {
      label: "Twitter",
      name: "twitter",

      placeholder: "https://google.com",
      required: false,
      icon: <FiTwitter />,
    },
    {
      label: "Github",
      name: "github",
      placeholder: "https://google.com",
      required: false,
      icon: <RiGithubLine />,
    },
    {
      label: "Telegram",
      name: "telegram",
      placeholder: "https://google.com",
      required: false,
      icon: <RiTelegramLine />,
    },
    {
      label: "Instagram",
      name: "instagram",
      placeholder: "https://google.com",
      required: false,
      icon: <FaInstagram />,
    },
    {
      label: "Discord",
      name: "discord",
      placeholder: "https://google.com",
      required: false,
      icon: <FaDiscord />,
    },
    {
      label: "Reddit",
      name: "reddit",
      placeholder: "https://google.com",
      required: false,
      icon: <ImReddit />,
    },
  ];
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div>
        <div className="">
          <div className="lg:hidden text-center mb-10">
            <Note />
          </div>
          <div className=" flex justify-between ">
            <label htmlFor="" className="block mb-1 text-sm">
              Logo URL
              {<span className=" text-red-400 ">*</span>}
            </label>
            <div className="hidden lg:block">
              <Note />
            </div>
          </div>
          <div className="bg-dark-500 border border-lightDark rounded-md flex h-12">
            <div className="flex justify-center items-center w-12 text-primary-400 text-xl border border-primary-400 rounded-l-md">
              <FaGlobe />
            </div>
            <input
              type="text"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
              required
              className="w-full bg-transparent focus:outline-none flex-1 px-4 text-sm focus:ring-0"
              placeholder={
                "https://www.softcash.finance/#/launchpads?chain=BSC-Test"
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
          {inputList.map((val, i) => (
            <React.Fragment key={i}>
              <CustomInputWithIcon
                icon={val.icon}
                placeholder={val.placeholder}
                required={val.required}
                label={val.label}
                name={val.name}
                onChange={handleChange}
                value={values[val.name]}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-sm">
            Description
          </label>
          <textarea
            className="w-full bg-transparent focus:outline-none flex-1 px-4 text-sm focus:ring-0 focus:border-gray-400 rounded-lg"
            id="w3review"
            name="w3review"
            rows="6"
            cols="50"
            placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur possimus, ipsum esse deleniti accusantium facilis exercitationem. Aliquid delectus molestias rerum!"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className=" grid grid-flow-col gap-2 justify-center mt-10">
        <Button onClick={decreaseStep}>Back</Button>
        <Button onClick={increaseStep}>Next</Button>
      </div>
    </div>
  );
};

export default Step3;
const CustomInputWithIcon = ({
  placeholder = "placeholder",
  required = false,
  label = "Logo URL",
  icon = <FaGlobe />,
  labelHelper = "",
  ...props
}) => {
  return (
    <div className="">
      <label htmlFor="" className="block mb-1 text-sm">
        {label}
        {required && <span className=" text-red-400 ">*</span>}
      </label>
      <div className="bg-dark-500 border border-lightDark rounded-md flex h-12">
        <div className="flex justify-center items-center w-12 text-primary-400 text-xl border border-primary-400 rounded-l-md">
          {icon}
        </div>
        <input
          type="text"
          required={required}
          {...props}
          className="w-full bg-transparent focus:outline-none flex-1 px-4 text-sm focus:ring-0"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
const Note = () => (
  <div className="note">
    <p className="text-xs">
      <span className=" text-primary-text mr-2 text-opacity-60">
        URL must end with a supported extension png, jpg, jpeg or gif. You can
        upload your image at
      </span>
      <a
        href=" https://upload.softcash.finance/"
        className=" text-primary-400"
        target={"_blank"}
      >
        https://upload.softcash.finance/
      </a>
    </p>
  </div>
);
