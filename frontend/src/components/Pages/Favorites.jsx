import React, { useContext } from "react";
import { PokemonContext } from "../States/StateContext";
import DefaultLayout from "../Layouts/DefaultLayout";
import { Link } from "react-router-dom";
import ImageLoader from "../helpers/ImageLoader";
import CapitilizeFirstLetter from "../helpers/CapitilizeFirstLetter";
import SpinningPokeballLoader from "../helpers/SpinningPokeballLoader";

const Favorites = () => {
  const { favorite } = useContext(PokemonContext);

  if (!favorite) {
    return (
      <div className="flex justify-center items-center h-full">
        <SpinningPokeballLoader />
      </div>
    );
  }

  return (
    <DefaultLayout>
      <div className="flex items-start mt-4 w-full h-full">
        {!favorite ? (
          <div className="flex justify-center items-center w-full h-full">
            <SpinningPokeballLoader />
          </div>
        ) : favorite.length === 0 ? (
          <div className="flex justify-center items-center w-full h-full">
            <div className="text-white text-lg text-center">
              You haven't added any favorites yet.
            </div>
          </div>
        ) : (
          <ul className="flex items-center flex-wrap text-center p-2 m-2 gap-4">
            {favorite.map((pokemon) => (
              <li
                key={pokemon.id}
                className="relative m-2 w-36 p-4 px-4 cursor-pointer rounded-2xl border-2 border-gray-400 flex justify-center items-center flex-col flex-auto bg-opacity-25 text-white hover:bg-custom-gradient hover:text-black hover:scale-95 transition-all overflow-hidden hover:overflow-hidden"
              >
                <Link to={`/pokemon/${pokemon.name}`}>
                  <div className="border-2 p-1 px-2 flex flex-auto rounded-lg text-sm bg-gray-700 border-gray-700 text-white font-semibold absolute right-0 top-0 shadow-lg">
                    #{pokemon.id}
                  </div>
                  <ImageLoader
                    className="flex flex-1 mb-1"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    Height={48}
                    Width={48}
                  />{" "}
                  <div className="flex justify-center items-center">
                    {CapitilizeFirstLetter(pokemon.name)}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Favorites;
