import React, { useContext } from "react";
import CapitilizeFirstLetter from "./helpers/CapitilizeFirstLetter";
import ImageLoader from "./helpers/ImageLoader";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import SearchResults from "./Head/Search Bar/SearchResults";
import { PokemonContext } from "./States/StateContext";

export default function Pokeinfo() {
  const {
    pokemon,
    loading,
    setSearchInput,
    setFilteredSearch,
    searchInput,
    filteredSearch,
    allPokemons,
    setSearchBarVisibility,
    searchBarVisibility,
  } = useContext(PokemonContext);

  return (
    <div className="relative flex justify-center">
      {searchBarVisibility && (
        <SearchResults
          setSearchInput={setSearchInput}
          setFilteredSearch={setFilteredSearch}
          allPokemons={allPokemons}
          searchInput={searchInput}
          filteredSearch={filteredSearch}
          setSearchBarVisibility={setSearchBarVisibility}
          searchBarVisibility={searchBarVisibility}
        />
      )}
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
                className="relative m-2 p-6 w-36 cursor-pointer rounded-3xl border-2 border-gray-400 flex justify-center items-center flex-col flex-auto bg-opacity-25 text-white hover:bg-custom-gradient hover:text-black hover:scale-95 transition-all overflow-hidden hover:overflow-hidden"
              >
                <div className="border-2 p-1 px-2 flex flex-auto rounded-lg text-sm bg-gray-700 border-gray-700 text-white font-semibold absolute right-0 top-0 shadow-lg">
                  #{poke.id}
                </div>
                <ImageLoader
                  className="flex flex-1 mb-1"
                  src={poke.sprites.front_default}
                  alt={poke.name}
                  Height={48}
                  Width={48}
                />

                <div className="">{CapitilizeFirstLetter(poke.name)}</div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
