import React from "react";
import Chart from "react-apexcharts";
const Right = () => {
  const textBoxClass =
    "flex justify-between items-center border-b border-[#132a4a] pb-2";
  const createObj = (title, desc) => ({ title, desc });

  const data = [
    createObj("Presale", "80"),
    createObj("Liquidity", "20"),
    createObj("Staking Ecosystem", "20"),
    createObj("Development", "20"),
    createObj("CEX Listing", "20"),
    createObj("Team Tokens", "20"),
    createObj("Unlocked", "20"),
  ];
  const series = data.map((item) => Number(item.desc));
  const labels = data.map((item) => item.title);
  return (
    <>
      <div className=" border border-primary-border p-2 rounded-lg  mt-28 text-primary-text text-center">
        <p>Make sure the website is softcash.finance!</p>
      </div>
      <div className=" bg-[#676767] rounded-full overflow-hidden mt-5">
        <div className="py-1.5 bg-green-600 w-1/2"></div>
      </div>
      <div className=" flex justify-between items-center mt-1 text-primary-text">
        <p>0 BNB</p>
        <p>200 BNB</p>
      </div>
      <div className="mt-6">
        <div className="text-center">
          <p>This pool has ended</p>
          <div className="grid grid-flow-col gap-2 text-primary-text justify-center text-sm mt-1 items-center">
            <a href="/">View Chart</a>
            <p className="text-xl">|</p>
            <a href="/">Buy/Sell</a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className={`${textBoxClass}`}>
          <p>Status</p>
          <p>ended</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Unsold token</p>
          <p>0 PUIRE</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Current Rate</p>
          <p>1 BNB = 2,411,454.454 PURE</p>
        </div>{" "}
        <div className={`${textBoxClass}`}>
          <p>Total Contributors</p>
          <p>251</p>
        </div>{" "}
        <div className="py-4  px-4">
          {/* <img src={Graph} alt="" /> */}
          <Chart
            series={series}
            type="donut"
            width={"100%"}
            options={{
              chart: {
                foreColor: "#fff",
                type: "donut",
              },
              labels: labels,
              plotOptions: {
                pie: {
                  startAngle: -180,
                  endAngle: 180,
                  donut: {
                    labels: {
                      show: true,
                      name: {
                        show: true,
                        color: "#fff",
                      },
                    },
                  },
                },
              },
              dataLabels: {
                enabled: false,
              },
              colors: [
                "#ffcc56",
                "#fd728f",
                "#039bff",
                "#26c8d7",
                "#a77ef6",
                "#a77ef6",
                "#a77ef6",
              ],
              fill: {
                type: "solid",
                colors: ["#ffcc56", "#fd728f", "#039bff"],
              },
              legend: {
                formatter: function (val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex];
                },
                show: true,
                position: "bottom",
              },
              tooltip: {
                enabled: false,
              },
            }}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center ">
          <p className="text-xl">Newslatters</p>
          <div>
            <input
              type="checkbox"
              className="inline-block mr-1"
              name=""
              id=""
            />
            <label htmlFor="">Never show again</label>
          </div>
        </div>
        <p className="mt-4">
          Sign up our mailing list to receive our new presales, features, tips
          and reviews for next 100x projects.
        </p>
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full bg-transparent mt-1"
        />
        <button className="py-2 px-6 bg-gray-500 text-white block mt-4">
          Subscribe
        </button>
      </div>
    </>
  );
};

export default Right;
