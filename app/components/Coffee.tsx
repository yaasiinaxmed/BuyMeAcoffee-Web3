import Image from "next/image";
import React from "react";
import { GameIconsCoffeeCup } from "./GameIconsCoffeeCup";

function Coffee() {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h2 className="text-lg text-white font-bold">
        Buy Me a <span className="text-[#DB6804]">Coffee</span>{" "}
      </h2>
      <div className="w-[280px] flex items-center justify-center gap-3 p-4 bg-[#db68041d] border-[1px] border-[#db680459] rounded-lg">
        <GameIconsCoffeeCup />
        <h2 className="text-white text-lg font-medium">X</h2>
        <div className="w-[40px] h-[40px] bg-[#db680459] cursor-pointer transition-all hover:bg-[#DB6804] focus:bg-[#DB6804] flex items-center justify-center text-white border-[1px] border-[#db680478] rounded-full">
          1
        </div>{" "}
        <div className="w-[40px] h-[40px] bg-[#db680459] cursor-pointer transition-all hover:bg-[#DB6804] focus:bg-[#DB6804] flex items-center justify-center text-white border-[1px] border-[#db680478] rounded-full">
          2
        </div>{" "}
        <div className="w-[40px] h-[40px] bg-[#db680459] cursor-pointer transition-all hover:bg-[#DB6804] focus:bg-[#DB6804] flex items-center justify-center text-white border-[1px] border-[#db680478] rounded-full">
          3
        </div>
      </div>
      <button className="mt-4 px-8 py-3 px-5 bg-[#DB6804] rounded-lg text-white hover:scale-105">
        Support
      </button>
    </div>
  );
}

export default Coffee;
