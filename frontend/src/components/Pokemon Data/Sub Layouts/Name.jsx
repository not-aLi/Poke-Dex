import React,{useContext} from "react";
import CapitilizeFirstLetter from "../../helpers/CapitilizeFirstLetter";
import { PokemonContext } from "../../States/StateContext";

const Name = () => {
    const {pokemonInfo} = useContext(PokemonContext)
  return (
    <div>
      <div className="mb-4 md:ml-4 md:mb-0">
        <h1 className="text-white font-bold text-3xl md:text-4xl">
          {CapitilizeFirstLetter(pokemonInfo.name)}
        </h1>
      </div>
    </div>
  );
};

export default Name;
