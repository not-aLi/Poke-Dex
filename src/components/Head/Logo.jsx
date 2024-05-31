import React from "react";
import { SiPokemon } from "react-icons/si";
export default function Logo() {
  return (
    <div>
      <div className="flex justify-center items-center md:justify-start md:items-center md:space-x-2 ">
        <SiPokemon className=" text-yellow-500 w-28 h-20 " />
      </div>
    </div>
  );
}
