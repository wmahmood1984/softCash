import Web3 from "web3";
import { contractAbi, contractAddress } from "../contracts/primary";
import { tokenAbi } from "../contracts/token";

export const shortAddress = (str) => {
  if (str) {
    if (str.length < 10) return str;
    return `${str.slice(0, 5)}...${str.slice(-5)}`;
  } else {
    return "";
  }
};
export const toHex = (num) => {
  const val = Number(num);
  return `0x${val.toString(16)}`;
};

export const formatFromWei = (str, decimal) => {
  if (str) {
    if (str.length < 1) return str;
    if (decimal === 9) {
      return Number(Web3.utils.fromWei(str, "Gwei")).toFixed(2);
    }
    return Web3.utils.fromWei(str, "ether");
  }
};
export const formatToWei = (str, decimal) => {
  if (str) {
    if (str.length < 1) return str;
    if (decimal === 9) {
      return Web3.utils.toWei(str, "Gwei");
    }
    return Web3.utils.toWei(str, "ether");
  }
};

export const getContract = async (library, token, abi) => {
  try {
    let _contract = null;
    if (token && !abi) {
      _contract = await new library.eth.Contract(tokenAbi, token);
    } else if (token && abi) {
      _contract = await new library.eth.Contract(abi, token);
    } else {
      _contract = await new library.eth.Contract(contractAbi, contractAddress);
    }
    return { ok: true, contract: _contract };
  } catch (error) {
    console.log(error);
    return { ok: false, contract: null };
  }
};

export const getUserBalance = async (library, account) => {
  try {
    let balance = await library.eth.getBalance(account);
    balance = formatFromWei(balance);

    return Number(balance).toFixed(4);
  } catch (error) {
    console.log(error);
    return 0;
  }
};
