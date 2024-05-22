import React from "react";
import { capitilizeFirstLetter } from "./PokemonList";
import ImageLoader from "./ImageLoader";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
export default function Pokeinfo({ pokemonData, pokemon, loading }) {
  return (
    <div className="flex justify-center">
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <ul className="flex flex-row flex-wrap text-center cursor-default">
          {pokemon.map((poke) => {
            return (
              <li
                key={poke.id}
                className=" m-2 p-6 w-36 cursor-pointer rounded-3xl border-2 border-gray-400 flex justify-center items-center flex-col flex-auto bg-opacity-25 text-white hover:bg-custom-gradient hover:text-black hover:scale-105 transition-all"
              >
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
