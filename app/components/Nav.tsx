import React from "react";
import ConnectWallet from "./ConnectWallet";

function Nav() {
  return (
    <div className="fixed top-[10px] w-full flex items-center justify-between container mx-auto p-4">
      <h2 className="text-xl text-white font-bold">
        Buy Me a <span className="text-[#DB6804]">Coffee</span>{" "}
      </h2>
      {/* connect Wallet */}
      <ConnectWallet />
    </div>
  );
}

export default Nav;
