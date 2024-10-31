import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";

const EvolutionChain = ({ renderEvolutionChain }) => {
  const {evolutionChain } = useContext(PokemonContext);

  return (
    <div>
      {evolutionChain && (
        <div className="flex justify-center items-center flex-col mt-8 w-full sm:max-w-sm md:max-w-md lg:max-w-full">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
            Evolution Chain:
          </h2>
          {evolutionChain.evolves_to && evolutionChain.evolves_to.length > 0 ? (
            <div className="flex flex-wrap">
              {renderEvolutionChain(evolutionChain)}
            </div>
          ) : (
            <div className="text-white text-center">
              No evolution data available for this Pokémon.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EvolutionChain;
