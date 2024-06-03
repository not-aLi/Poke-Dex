import React, { useState } from "react";
import FetchAllPokemon from "./components/Fetch Data from API/FetchAllPokemon";
import PokeInfo from "./components/PokeInfo";
import Header from "./components/Head/Header";
import PokemonOnScreen from "./components/helpers/PokemonOnScreen";
import DisplayCount from "./components/Pokemon Count/DisplayCount";
import UpdatePokemonCount from "./components/Pokemon Count/UpdatePokemonCount";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=30");
  const [searchBarVisibility, setSearchBarVisibility] = useState(false);
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [displayedPokemonCount, setDisplayedPokemonCount] = useState(30);
  const [searchInput, setSearchInput] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  return (
    <>
      <Header
        loading={loading}
        search={searchBarVisibility}
        setSearchBarVisibility={setSearchBarVisibility}
        searchBarVisibility={searchBarVisibility}
        setSearchInput={setSearchInput}
      />

      {/* <PokemonOnScreen setUrl={setUrl} /> */}
      <DisplayCount
        displayedPokemonCount={displayedPokemonCount}
        totalPokemonCount={totalPokemonCount}
        loading={loading}
      />
      <FetchAllPokemon
        setPokemon={setPokemon}
        setLoading={setLoading}
        setNextUrl={setNextUrl}
        setPreviousUrl={setPreviousUrl}
        setTotalPokemonCount={setTotalPokemonCount}
        url={url}
        setAllPokemons={setAllPokemons}
      />
      <PokeInfo
        pokemon={pokemon}
        loading={loading}
        searchBar={searchBarVisibility}
        setSearchInput={setSearchInput}
        setFilteredSearch={setFilteredSearch}
        searchInput={searchInput}
        filteredSearch={filteredSearch}
        allPokemons={allPokemons}
      />
      <UpdatePokemonCount
        setDisplayedPokemonCount={setDisplayedPokemonCount}
        pokemon={pokemon}
        setUrl={setUrl}
        previousUrl={previousUrl}
        nextUrl={nextUrl}
        loading={loading}
      />
    </>
  );
}

export default App;
