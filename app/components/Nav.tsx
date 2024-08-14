import React from "react";

function Nav() {
  return (
    <div className="fixed top-[10px] w-full flex items-center justify-between container mx-auto p-4">
      <h2 className="text-xl text-white font-bold">
        Buy Me a <span className="text-[#DB6804]">Coffee</span>{" "}
      </h2>
      {/* connect Wallet */}
      <button className="p-3 px-5 bg-[#DB6804] rounded-lg text-white hover:scale-105">
        Connect Wallet
      </button>
    </div>
  );
}

export default Nav;
