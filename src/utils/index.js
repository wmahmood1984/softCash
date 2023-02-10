import {
  AiFillHome,
  AiFillQuestionCircle,
  AiOutlineLineChart,
} from "react-icons/ai";
import {
  FaGlobe,
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaPlaneDeparture,
  FaAngleDoubleLeft,
  FaHandshake,
  FaRegNewspaper,
} from "react-icons/fa";
import {
  MdOutlineSpaceDashboard,
  MdSwapHorizontalCircle,
} from "react-icons/md";
import { HiDocumentText, HiLockClosed } from "react-icons/hi";
import { IoWallet } from "react-icons/io5";
import { RiAdvertisementFill } from "react-icons/ri";
import { SiHandshakeProtocol } from "react-icons/si";
export const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545"; //TESTNET
// export const PROVIDER = "https://bsc-dataseed.binance.org"; //MAINNET

export const menuList = [
  {
    name: "Rarity",
    to: "/",
  },
  {
    name: "Matrix",
    to: "/matrix",
  },
  {
    name: "Wallet",
    to: "/wallet",
  },
];
export const sidebarMenu = [
  {
    name: "Home",
    to: "/",
    icon: <AiFillHome />,
  },
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: <MdOutlineSpaceDashboard />,
  },

  {
    name: "Soft Launchpad",
    to: "soft_launchpad",
    icon: <FaPlaneDeparture />,
    submenu: [
      {
        name: "Create Token",
        to: "/create_token",
      },
      {
        name: "Create Subscription",
        to: "/create_subscription",
      },
      {
        name: "Create Presale",
        to: "/create_presale",
      },
      {
        name: "Create Fair Launch",
        to: "/create_fair_launch",
      },
      {
        name: "Launchpad List",
        to: "/launchpad_list",
      },
    ],
  },

  {
    name: "View Chart",
    to: "/view_chart",
    icon: <AiOutlineLineChart />,
  },
  {
    name: "Swap & Trade",
    to: "/swap_and_trade",
    icon: <MdSwapHorizontalCircle />,
  },
  {
    name: "Soft Wallet",
    to: "/soft_wallet",
    icon: <IoWallet />,
  },
  {
    name: "Soft Browser",
    to: "/soft_browser",
    icon: <FaAngleDoubleLeft />,
  },
  {
    name: "Stake & Earn",
    to: "stake_and_earn",
    icon: <FaHandshake />,
    submenu: [
      {
        name: "Stake",
        to: "/stake",
      },
      {
        name: "Overview",
        to: "/overview",
      },
      {
        name: "Account",
        to: "/account",
      },
      {
        name: "Calculator",
        to: "/calculator",
      },
    ],
  },
  {
    name: "Soft Locker",
    to: "soft_locker",
    icon: <HiLockClosed />,
    submenu: [
      {
        name: "Create Lock",
        to: "/create_lock",
      },
      {
        name: "Locked Tokens",
        to: "/locked_tokens",
      },
      {
        name: "Locked Liquidity",
        to: "/locked_liquidity",
      },
    ],
  },
  {
    name: "News Portal",
    to: "/news_portal",
    icon: <FaRegNewspaper />,
  },
  {
    name: "Ads & Promotion",
    to: "/ads_and_promotations",
    icon: <RiAdvertisementFill />,
  },
  {
    name: "Career & Partnership",
    to: "/career_and_partnership",
    icon: <SiHandshakeProtocol />,
  },
  {
    name: "Support & Assistance",
    to: "/support_and_partnership",
    icon: <AiFillQuestionCircle />,
  },
  {
    name: "Documents",
    to: "/documents",
    icon: <HiDocumentText />,
  },
];

export const socialLinks = [
  {
    title: "Website",
    icon: <FaGlobe />,
    link: "",
  },
  {
    title: "Twitter",
    icon: <FaTwitter />,
    link: "",
  },
  {
    title: "Telegram",
    icon: <FaTelegramPlane />,
    link: "",
  },
  {
    title: "Discord",
    icon: <FaDiscord />,
    link: "",
  },
];

export const RPC_URL =
  "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
