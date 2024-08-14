"use client";

import React, { useState } from "react";
import { GameIconsCoffeeCup } from "./GameIconsCoffeeCup";
import { useAccount } from "wagmi";

function Coffee() {
  const [select, setSelect] = useState(0);
  const { isConnected } = useAccount();
  const [message, setMessage] = useState('')
  const coffeePriceInETH = 0.025;

  const handleSupportClick = () => {
    if (!isConnected) {
      setMessage("Please connect your wallet.");
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <h2 className="text-lg text-white font-bold">
        Buy Me a <span className="text-[#DB6804]">Coffee</span>
      </h2>
      <div className="w-[280px] flex items-center justify-center gap-3 p-4 bg-[#db68041d] border-[1px] border-[#db680459] rounded-lg">
        <GameIconsCoffeeCup />
        <h2 className="text-white text-lg font-medium">X</h2>

        {[1, 3, 5].map((amount) => (
          <div
            key={amount}
            onClick={() => setSelect(amount)}
            className={`w-[40px] h-[40px] cursor-pointer transition-all ${
              select === amount ? "bg-[#DB6804]" : "bg-[#db680459]"
            } hover:bg-[#DB6804] flex items-center justify-center text-white border-[1px] border-[#db680478] rounded-full`}
          >
            {amount}
          </div>
        ))}
      </div>
      {select > 0 && (
        <p className="mt-2 text-white">
          {select} coffee = {(select * coffeePriceInETH).toFixed(3)} ETH
        </p>
      )}
      <button
        onClick={handleSupportClick}
        className={`mt-4 py-3 px-5 bg-[#DB6804] rounded-lg text-white hover:scale-105`}
      >
        Support
      </button>
      {!isConnected && (
        <p className="mt-2 text-white">
         {message}
        </p>
      )}
    </div>
  );
}

export default Coffee;