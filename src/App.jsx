import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/PaginationLayout";
import PokeInfo from "./components/PokeInfo";
import Header from "./components/Head/Header";
import PokemonOnScreen from "./components/PokemonOnScreen";
import DisplayCount from "./components/DisplayCount";
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState();
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [pokemonUrl, setPokemonUrl] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=30");
  const [searchBarVisibility, setSearchBarVisibility] = useState(false);
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [displayedPokemonCount, setDisplayedPokemonCount] = useState(30);

  const updateDisplayedPokemonCount = (operation) => {
    setDisplayedPokemonCount((prevCount) => {
      if (operation === "increment") {
        return prevCount + pokemon.length;
      } else if (operation === "decrement") {
        return Math.max(prevCount - pokemon.length, 0);
      } else {
        return prevCount;
      }
    });
  };

  const previousButton = () => {
    setUrl(previousUrl);
    updateDisplayedPokemonCount("decrement");
  };
  const nextButton = () => {
    setUrl(nextUrl);
    updateDisplayedPokemonCount("increment");
  };
  const toggleSearch = () => {
    setSearchBarVisibility(!searchBarVisibility);
  };
  return (
    <>
      <Header
        loading={loading}
        toggleSearch={toggleSearch}
        search={searchBarVisibility}
      />
      {/* <PokemonOnScreen setUrl={setUrl} /> */}
      <DisplayCount
        displayedPokemonCount={displayedPokemonCount}
        totalPokemonCount={totalPokemonCount}
        loading={loading}
      />
      <PokemonList
        setPokemon={setPokemon}
        setLoading={setLoading}
        setPokemonData={setPokemonData}
        setNextUrl={setNextUrl}
        setPreviousUrl={setPreviousUrl}
        setPokemonUrl={setPokemonUrl}
        setTotalPokemonCount={setTotalPokemonCount}
        url={url}
        loading={loading}
        setDisplayedPokemonCount={setDisplayedPokemonCount}
        displayPokemonCount={displayedPokemonCount}
      />
      <PokeInfo
        pokemonData={pokemonData}
        pokemon={pokemon}
        loading={loading}
        searchBar={searchBarVisibility}
        totalPokemonCount={totalPokemonCount}
      />
      <Pagination
        nextButton={nextUrl ? nextButton : null}
        previousButton={previousUrl ? previousButton : null}
        loading={loading}
      />
    </>
  );
}

export default App;
