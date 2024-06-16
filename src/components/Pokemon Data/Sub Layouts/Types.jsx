import React, { useContext } from "react";
import CapitilizeFirstLetter from "../../helpers/CapitilizeFirstLetter";
import { PokemonContext } from "../../States/StateContext";

const Types = ({ renderColor }) => {
  const { pokemonInfo } = useContext(PokemonContext);

  return (
    <div>
      <div className="flex items-center mb-6">
        {pokemonInfo.types.map((type, index) => (
          <span
            className="text-white p-2 m-2 rounded-lg"
            key={index}
            style={renderColor(type.type.name)}
          >
            {CapitilizeFirstLetter(type.type.name)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Types;
