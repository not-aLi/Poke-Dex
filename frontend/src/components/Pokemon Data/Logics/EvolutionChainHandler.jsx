import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import CapitilizeFirstLetter from "../../helpers/CapitilizeFirstLetter";
import ImageLoader from "../../helpers/ImageLoader";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import EvolutionChain from "../Sub Layouts/EvolutionChain";

const EvolutionChainHandler = () => {
  const { allPokemons } = useContext(PokemonContext);

  /* This `renderEvolutionChain` function is responsible for rendering the evolution chain of a
  Pokemon. It takes a `chain` object as a parameter, which represents a specific stage in the
  evolution chain. Here's a breakdown of what the function does: */
  const renderEvolutionChain = (chain) => {
    if (!chain || !chain.species) return null;

    const pokemon = allPokemons.find(
      (poke) => poke.name === chain.species.name
    );

    return (
      <div className="flex items-center">
        {pokemon && (
          <Link to={`/pokedex/pokemon/${chain.species.name}`}>
            <div className="flex flex-col items-center space-y-2">
              <ImageLoader
                src={pokemon.sprites.other.showdown.front_default}
                alt={pokemon.name}
                Height={30}
                Width={30}
              />
              <h3 className="text-white">
                {CapitilizeFirstLetter(chain.species.name)}
              </h3>
            </div>
          </Link>
        )}
        {chain.evolves_to && chain.evolves_to.length > 0 && (
          <>
            <div className="flex items-center md:ml-8 lg:ml-12">
              {" "}
              <BsArrowRight className="text-white w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div className="ml-4 flex-grow">
              {chain.evolves_to.map((nextChain, index) => (
                <div key={index} className="md:ml-8 lg:ml-12">
                  {" "}
                  {renderEvolutionChain(nextChain)}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      <EvolutionChain renderEvolutionChain={renderEvolutionChain} />
    </div>
  );
};

export default EvolutionChainHandler;
