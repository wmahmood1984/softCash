// import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import Banner from "../Banner";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex bg-primary">
      <div className="min-h-screen bg-gray flex flex-col flex-1">
        <Header setOpen={setOpen} open={open} />
        <div className="flex ">
          <div className="lg:w-[260px]">
            <Sidebar open={open} setOpen={setOpen} />
          </div>
          <div className="  flex-1 max-w-full px-4 md:px-6 py-4 mt-48 md:mt-24 text-[#B3B3B3]">
            <div className="grid grid-cols-1">
              <div>
                <Banner />
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
