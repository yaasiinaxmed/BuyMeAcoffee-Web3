"use client";

import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { IoWallet } from "react-icons/io5";


const ConnectWallet: React.FC = () => {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();

  const shortenAddress = (addr: string | undefined) => {
    return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";
  };

  return (
    <div>
      {!isConnected ? (
        <button
          onClick={() => open()}
          className="flex items-center justify-center gap-1 p-3 px-5 bg-[#DB6804] rounded-lg text-white hover:scale-105"
        >
          <IoWallet />
           Connect Wallet
        </button>
      ) : (
        <button
          onClick={() => open()}
          className="flex items-center justify-center gap-1 p-3 px-5 bg-[#DB6804] rounded-lg text-white hover:scale-105"
        >
          <IoWallet />
          {shortenAddress(address)}
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;