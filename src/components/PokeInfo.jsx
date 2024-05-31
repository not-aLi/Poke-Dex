import React, { useState } from "react";
import { capitilizeFirstLetter } from "./PokemonList";
import ImageLoader from "./ImageLoader";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import SearchBar_Mobile_Version from "./Head/SearchBar_Mobile_Version";
export default function Pokeinfo({
  pokemonData,
  pokemon,
  loading,
  searchBar,
  totalPokemonCount,
}) {
  return (
    <div className="relative flex justify-center">
      {searchBar && <SearchBar_Mobile_Version />}
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <ul className="flex flex-row flex-wrap text-center cursor-default">
          {pokemon.map((poke) => {
            return (
              <li
                key={poke.id}
                className="relative m-2 p-6 w-36 cursor-pointer rounded-3xl border-2 border-gray-400 flex justify-center items-center flex-col flex-auto bg-opacity-25 text-white hover:bg-custom-gradient hover:text-black hover:scale-105 transition-all overflow-hidden"
              >
                <div className="border-2 p-1 px-2 flex flex-auto rounded-lg text-sm bg-gray-700 border-gray-700 text-white font-semibold absolute right-0 top-0 shadow-lg">
                  #{poke.id}
                </div>
                <ImageLoader
                  className="flex flex-1 mb-1"
                  src={poke.sprites.front_default}
                  alt={poke.name}
                />

                <div className="">{capitilizeFirstLetter(poke.name)}</div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
