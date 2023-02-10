import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { sidebarMenu, socialLinks } from "../../utils";
import { AiFillCaretDown } from "react-icons/ai";
import { Backdrop, Collapse } from "@mui/material";
const Sidebar = ({ open, setOpen }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectHandler = (i) => {
    if (i === selectedIndex) {
      return setSelectedIndex(null);
    }
    setSelectedIndex(i);
  };

  return (
    <>
      <Backdrop open={open} onClick={() => setOpen(false)}></Backdrop>
      <div
        className={`z-[99] ${
          open ? "left-0" : "-left-full lg:left-0"
        }  border-r-2 border-primary-border top-[193px] md:top-[88px] transition-all duration-300 fixed h-full w-[260px] p-4 text-white flex flex-col justify-between overflow-y-auto pb-20 bg-primary`}
      >
        <div className="pb-10">
          <div className="mt-3 flex-1">
            <ul className="">
              {sidebarMenu.map((item, index) => (
                <li key={index}>
                  <CustomLink
                    to={item.to}
                    onClick={(e) => {
                      if (item.submenu.length > 0) {
                        e.preventDefault();
                      }
                      selectHandler(index);
                      // setOpen(false);
                    }}
                    className="p-2 px-3 rounded-xl flex justify-between items-center"
                  >
                    <p className=" grid grid-flow-col gap-2 items-center justify-start">
                      {item.icon} <span>{item.name}</span>{" "}
                    </p>
                    {item.submenu?.length > 0 && <AiFillCaretDown />}
                  </CustomLink>
                  <Collapse in={index === selectedIndex}>
                    {item.submenu?.length > 0 && (
                      <ul className="ml-5">
                        {item.submenu.map((submenuItem, subindex) => (
                          <li key={subindex}>
                            <CustomLink
                              className="p-2 px-4 rounded-xl flex justify-between items-center"
                              to={submenuItem.to}
                              onClick={(e) => {
                                setOpen(false);
                              }}
                            >
                              {submenuItem.name}
                            </CustomLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Collapse>
                </li>
              ))}
            </ul>
          </div>
          <img src="/assets/left_banner.png" className="mt-4" alt="" />
        </div>
        {/* <div>
          <ul className=" grid grid-flow-col gap-4  justify-center  items-center mt-4 mb-2">
            {socialLinks.map((val, index) => (
              <li key={index}>
                <a href={val.link} className="text-primary text-lg">
                  {val.icon}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
function CustomLink({ children, to, className, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link
        className={` transition-all duration-300 ${
          match && "gradient border border-primary-border text-primary-text"
        } ${className}`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
}
