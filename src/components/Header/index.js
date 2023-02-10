// import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillBell, AiTwotoneSetting } from "react-icons/ai";
import SearchBar from "./components/SearchBar";
import { BiChevronDown } from "react-icons/bi";
import { IoWallet } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { FaTimes } from "react-icons/fa";
import Logo from "../Logo";
import { WalletModalContext } from "../../context/walletModalContext";
import { useWeb3React } from "@web3-react/core";
import { shortAddress } from "../../web3/helpers";
import { chains } from "./chaindata";
import ChainChangeModal from "./ChainChangeModal";
const Header = ({ setOpen, open }) => {
  const { connectHandler } = useContext(WalletModalContext);
  const { account, chainId } = useWeb3React();
  const [currentChain, setCurrentChain] = useState({});
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const updateChain = () => {
      if (chainId) {
        const selectedChain = chains.filter((chain) => chain.chain === chainId);
        selectedChain.length !== 0
          ? setCurrentChain(selectedChain[0])
          : setCurrentChain(chains[0]);
        // console.log(chains.filter((chain) => chain.chain === chainId));
      } else {
        setCurrentChain(chains[2]);
      }
    };
    updateChain();
  }, [chainId]);

  return (
    <div className=" fixed w-full bg-primary z-10">
      <div className="px-6 py-5 border-b border-b-gray-300 grid grid-cols-1 md:flex md:items-center justify-center md:justify-between">
        <Link to="/" className="">
          {/* <img src="/assets/Logo2.png" className="w-60" alt="" /> */}
          <Logo />
        </Link>
        <div className="md:block hidden flex-1">
          <SearchBar />
        </div>
        <div className="my-6 md:my-0 flex items-center justify-between">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-white text-xl md:hidden"
          >
            {open ? <FaTimes /> : <TfiMenu />}
          </button>
          <div className=" grid grid-flow-col gap-2 items-center  text-white">
            <button className="text-white border border-primary-border rounded-full h-7 w-7  bg-transparent grid place-content-center text-sm">
              <AiTwotoneSetting />
            </button>
            <button className="text-white border border-primary-border rounded-full h-7 w-7  bg-transparent grid place-content-center text-sm">
              <AiFillBell />
            </button>
            <button className="bg-[#373632] p-1  grid grid-flow-col gap-2 items-center text-sm">
              <img src="/assets/icons/pane.png" alt="" className="w-4" />
              <p className="md:block hidden">Audi</p>
              <BiChevronDown className="text-xl md:block hidden" />
            </button>
            <button
              className="bg-[#373632] p-1  grid grid-flow-col gap-2 items-center text-sm"
              onClick={handleOpen}
            >
              <img src={currentChain.icon} alt="" className="w-4 h-3" />
              <p className="md:block hidden ">{currentChain.name}</p>
              <BiChevronDown className="text-xl md:block hidden" />
            </button>
            <button
              className="md:bg-[#0996df] md:text-white text-xl md:text-sm md:px-3 py-1  "
              onClick={connectHandler}
            >
              {account ? (
                <span className="text-sm">{shortAddress(account)}</span>
              ) : (
                <>
                  <span className="hidden md:block">Connect Wallet</span>
                  <span className="md:hidden">
                    <IoWallet />
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="md:hidden w-full flex-1">
          <SearchBar />
        </div>
      </div>
      <ChainChangeModal
        open={show}
        setOpen={setShow}
        handleOpen={handleOpen}
        handleClose={handleClose}
        currentChain={currentChain}
        setCurrentChain={setCurrentChain}
      />
    </div>
  );
};

export default Header;

// function CustomLink({ children, to, className, ...props }) {
//   let resolved = useResolvedPath(to);
//   let match = useMatch({ path: resolved.pathname, end: true });

//   return (
//     <>
//       <Link
//         className={` transition-all duration-300 ${
//           match ? " text-primary  " : "text-[#dde3e3]"
//         } ${className}`}
//         to={to}
//         {...props}
//       >
//         {children}
//       </Link>
//     </>
//   );
// }
