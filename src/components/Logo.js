import React from "react";

const Logo = () => {
  return (
    <div className="grid grid-flow-col gap-2 justify-start items-center">
      <img src="/assets/LogoIcon.png" className="w-10" alt="" />
      <p className="text-primary-text font-bold text-lg">Soft Cash Finance</p>
    </div>
  );
};

export default Logo;
