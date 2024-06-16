import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import ImageLoader from "../../helpers/ImageLoader";

const Image = () => {
  const { pokemonInfo, isShiny } = useContext(PokemonContext);
  return (
    <div>
      <div className="relative h-64 w-64 mb-4 flex items-center justify-center md:h-80 md:w-80 p-2 md:mr-4 grow">
        <img
          src="https://img.icons8.com/?size=100&id=13861&format=png&color=707070"
          alt="Pokeball"
          className="absolute inset-0 h-full w-full object-cover rounded-full z-10"
        />
        <span className="relative z-20">
          <ImageLoader
            src={
              !isShiny
                ? pokemonInfo.sprites.other["official-artwork"].front_default
                : pokemonInfo.sprites.other["official-artwork"].front_shiny
            }
            alt={pokemonInfo.name}
            Height={80}
            Width={80}
          />
        </span>
      </div>
    </div>
  );
};

export default Image;
