"use client";

import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const ConnectWallet: React.FC = () => {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();

  return (
    <div>
      {!isConnected ? (
        <button
          onClick={() => open()}
          className="p-3 px-5 bg-[#DB6804] rounded-lg text-white hover:scale-105"
        >
          Connect Wallet
        </button>
      ) : (
        <div>{address}</div>
      )}
    </div>
  );
};

export default ConnectWallet;
