import React, { useContext } from "react";
import CapitilizeFirstLetter from "../../helpers/CapitilizeFirstLetter";
import Forms from "../Sub Layouts/Forms";
import { PokemonContext } from "../../States/StateContext";
import { Link } from "react-router-dom";
import ImageLoader from "../../helpers/ImageLoader";

const FormsHandler = () => {
  const { allPokemons } = useContext(PokemonContext);
  /* The `renderForms` function in the provided code snippet is responsible for generating the visual
representation of a list of Pokemon forms based on the input `species` data. Here is a breakdown of
what the function does: */

const renderForms = (species, currentPokemonName) => {
  if (!species || !species.varieties) return null;

  return (
    <div className="flex items-center flex-wrap justify-center">
      {species.varieties
        .filter(variety => variety.pokemon.name !== currentPokemonName)
        .map((variety, index) => {
          const pokemon = allPokemons.find((poke) => poke.name === variety.pokemon.name);

          return pokemon ? (
            <Link key={index} to={`/pokemon/${variety.pokemon.name}`}>
              <div className="flex flex-col items-center space-y-2 m-2">
                <ImageLoader
                  src={pokemon.sprites.other.showdown.front_default}
                  alt={pokemon.name}
                  Height={50}
                  Width={50}
                />
                <h3 className="text-white text-center">
                  {CapitilizeFirstLetter(variety.pokemon.name)}
                </h3>
              </div>
            </Link>
          ) : null;
        })}
    </div>
  );
};

  return (
    <div>
      <Forms renderForms={renderForms} />
    </div>
  );
};

export default FormsHandler;
