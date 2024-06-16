import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import { RiShining2Line, RiShining2Fill } from "react-icons/ri";

const ShinyButton = ({ toggleShiny }) => {
  const { isShiny } = useContext(PokemonContext);
  return (
    <div>
      <button className="relative mb-4 md:mb-0" onClick={toggleShiny}>
        {!isShiny ? (
          <RiShining2Line className="text-2xl text-white hover:text-yellow-400 transition-all duration-75 hover:cursor-pointer" />
        ) : (
          <RiShining2Fill className="text-2xl text-yellow-500 hover:cursor-pointer hover:text-yellow-400 transition-all duration-75" />
        )}
      </button>
    </div>
  );
};

export default ShinyButton;
