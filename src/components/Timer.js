import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { zeroPad } from "react-countdown";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
const Timer = ({ timestamp }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const difference = +dayjs(timestamp * 1000) - dayjs().utc().unix() * 1000;

  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  return (
    <>
      {difference > 0 ? (
        <span>
          {days ? `${days} :` : null} {zeroPad(hours)} : {zeroPad(minutes)} :{" "}
          {zeroPad(seconds)}
        </span>
      ) : (
        <span>0</span>
      )}
    </>
  );
};
export default Timer;
