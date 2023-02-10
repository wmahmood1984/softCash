import React from "react";

import Button from "../../../components/Button";

const Step4 = ({ increaseStep, decreaseStep }) => {
  const detailList1 = [
    {
      title: "Total token",
      desc: "16,472  RAT",
      color: "primary",
    },
    {
      title: "Decimal",
      desc: "18",
    },
    {
      title: "Token symbol",
      desc: "RAT",
    },
    {
      title: "Token decimals",
      desc: "18",
    },

    {
      title: "Presale rate",
      desc: "100 RAT",
    },
    {
      title: "Listing rate",
      desc: "softcash.com/newsales",
    },

    {
      title: "Sale method",
      desc: "Public",
    },
    {
      title: "Softcap",
      desc: "60 BNB",
    },
    {
      title: "Hardcap",
      desc: "100 BNB",
    },
    {
      title: "Minimum buy",
      desc: "0.1 BNB",
    },
    {
      title: "Maximum buy",
      desc: "5 BNB",
    },
    {
      title: "Liquidity",
      desc: "5 BNB",
    },
  ];

  const detailList2 = [
    {
      title: "Token name",
      desc: "RAT",
    },
    {
      title: "Start time",
      desc: "2022-01-14T00:00 (UTC)",
    },

    {
      title: "End time",
      desc: "2022-01-20T00:00 (UTC)",
    },
    {
      title: "Liquidity lockup time",
      desc: "180 Minutes",
    },
    {
      title: "Website",
      desc: "softcash.com/newsales",
    },
    {
      title: "Facebook",
      desc: "softcash.com/facebook",
    },
    {
      title: "Twitter",
      desc: "softcash.com/twitter",
    },
    {
      title: "Telegram",
      desc: "softcash.com/telegram",
    },
    {
      title: "Github",
      desc: "softcash.com/github",
    },
    {
      title: "Instagram",
      desc: "softcash.com/instagram",
    },
    {
      title: "Reddit",
      desc: "softcash.com/reddit",
    },
    {
      title: "Using Team Vesting?",
      desc: "No",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid gap-y-4">
          {detailList1.map((val, i) => (
            <React.Fragment key={i}>
              <ListItem title={val.title} desc={val.desc} color={val.color} />
            </React.Fragment>
          ))}
        </div>
        <div className="grid gap-y-4">
          {detailList2.map((val, i) => (
            <React.Fragment key={i}>
              <ListItem title={val.title} desc={val.desc} color={val.color} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="text-sm mt-10 flex justify-between pb-2 items-center border-b border-lightDark">
        <p className=" ">Description</p>
      </div>
      <p className="text-gray-400 text-xs sm:text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aut at
        repellendus vitae similique tenetur esse excepturi ipsa neque quo
        delectus, aspernatur id dolorem recusandae odio et veritatis animi
        officiis ad illum nam accusantium incidunt placeat eveniet! Enim quas
        quasi mollitia accusantium, nemo quam ullam quaerat officiis. Eius, vero
        accusantium?
      </p>
      <div className=" grid grid-flow-col gap-2 justify-center mt-10">
        <Button onClick={() => {}}>Crete</Button>
        {/* <Button onClick={increaseStep}>Next</Button> */}
      </div>
    </>
  );
};

export default Step4;

const ListItem = ({ title = "", desc = "", color = "" }) => {
  return (
    <div className="text-xs sm:text-sm flex justify-between pb-2 items-center border-b ">
      <p className=" ">{title}</p>
      <p
        className={`font-semibold ${
          color === "primary" ? "text-primary-400" : "text-gray-400"
        } `}
      >
        {desc}
      </p>
    </div>
  );
};
