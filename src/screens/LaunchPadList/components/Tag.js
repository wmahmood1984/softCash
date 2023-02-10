import React from "react";

const Tag = ({ type, small = false }) => {
  const text =
    type === "upcoming"
      ? "Upcoming"
      : type === "live"
      ? "Sale Live"
      : type === "ended"
      ? "Sale Ended"
      : type === "cancelled"
      ? "Cancelled"
      : "Success";

  const color =
    type === "upcoming"
      ? "#f4a41b"
      : type === "live"
      ? "#22a55a"
      : type === "ended"
      ? "#d00101"
      : type === "cancelled"
      ? "#acacad"
      : "#22a55a";
  return (
    <div
      className={`${
        small && "text-xs"
      }  rounded-md border border-gray-400 p-1.5 font-semibold `}
      style={{ color: color }}
    >
      • {text}
    </div>
  );
};

export default Tag;
