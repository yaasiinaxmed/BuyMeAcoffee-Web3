"use client";

import React, { useState, useEffect } from "react";
import { GameIconsCoffeeCup } from "./GameIconsCoffeeCup";
import { useAccount, useSendTransaction } from "wagmi";
import { parseUnits } from "ethers"; // For parsing ETH to Wei

function Coffee() {
  const [select, setSelect] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { isConnected } = useAccount();
  const coffeePriceInETH = 0.025;

  // Calculate total ETH amount based on selected coffee
  const totalAmountInETH = (select * coffeePriceInETH).toFixed(3);

  // Use wagmi's useSendTransaction to send the transaction
  const { sendTransaction, data, isSuccess, isPending, isError, error } = useSendTransaction();

  useEffect(() => {
    if (isSuccess && data) {
      setMessage("Thank you for the supporting! 🎉");
      setLoading(false);

      // Hide the message after 1 minute (60000 milliseconds)
      const timer = setTimeout(() => {
        setMessage('');
      }, 60000); // 60 seconds

      // Clear the timer if the component unmounts before 1 minute
      return () => clearTimeout(timer);
    }

    if (isError && error) {
      console.error(`Transaction error: ${error.message}`);
      setLoading(false);
      setMessage("Transaction error. Please try again.");

      // Hide the error message after 10 seconds
      const timer = setTimeout(() => {
        setMessage('');
      }, 10000); // 10 seconds

      // Clear the timer if the component unmounts before 10 seconds
      return () => clearTimeout(timer);
    }
  }, [isSuccess, data, isError, error]);

  const handleSupportClick = () => {
    if (!isConnected) {
      setMessage("Please connect your wallet.");

      // Hide the message after 10 seconds
      const timer = setTimeout(() => {
        setMessage('');
      }, 10000); // 10 seconds

      // Clear the timer if the component unmounts before 10 seconds
      return () => clearTimeout(timer);
    }

    if (select <= 0 || isNaN(select)) {
      setMessage("Please select a valid number of coffees.");

      // Hide the message after 10 seconds
      const timer = setTimeout(() => {
        setMessage('');
      }, 10000); // 10 seconds

      // Clear the timer if the component unmounts before 10 seconds
      return () => clearTimeout(timer);
    }

    setLoading(true);

    // Send the transaction
    sendTransaction({
      to: '0x27145Ef357a6ca0aE4424113f458abEb553A4d22', 
      value: parseUnits(totalAmountInETH, 'ether'), // Convert ETH to Wei
    });
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
          {select} coffee(s) = {(select * coffeePriceInETH).toFixed(3)} ETH
        </p>
      )}
      <button
        onClick={handleSupportClick}
        className={`mt-4 py-3 px-5 bg-[#DB6804] rounded-lg text-white hover:scale-105 flex items-center justify-center`}
        disabled={isPending} // Disable button during loading
      >
        {isPending ? "Sending..." : "Support"} {/* Change button text during loading */}
      </button>
      {message && (
        <p className="mt-2 text-white">{message}</p>
      )}
    </div>
  );
}

export default Coffee;