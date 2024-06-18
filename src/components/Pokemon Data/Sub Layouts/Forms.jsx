import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import SpinningPokeballLoader from "../../helpers/SpinningPokeballLoader";

const Forms = ({ renderForms }) => {
  const { speciesData, pokemonInfo } = useContext(PokemonContext);

  if (!speciesData || !pokemonInfo) {
    return (
      <div className="w-6 h-6">
        <SpinningPokeballLoader />
      </div>
    );
  }

  const currentPokemonName = pokemonInfo.name;

  return (
    <div className="flex items-center flex-col mt-8 w-full sm:max-w-sm md:max-w-md lg:max-w-full">
      <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
        Forms:
      </h2>
      {speciesData.varieties && speciesData.varieties.length > 1 ? (
        <div className="flex flex-wrap justify-center">
          {renderForms(speciesData, currentPokemonName)}
        </div>
      ) : (
        <div className="text-white text-center">
          No form data available for this Pokémon.
        </div>
      )}
    </div>
  );
};

export default Forms;
