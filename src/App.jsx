import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/PaginationLayout";
import PokeInfo from "./components/PokeInfo";
import NavbarLayout from "./components/NavbarLayout";
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState();
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [pokemonUrl, setPokemonUrl] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=40");

  const previousButton = () => {
    setUrl(previousUrl);
  };
  const nextButton = () => {
    setUrl(nextUrl);
  };
  return (
    <>
    <NavbarLayout/>
      <PokemonList
        setPokemon={setPokemon}
        setLoading={setLoading}
        setPokemonData={setPokemonData}
        setNextUrl={setNextUrl}
        setPreviousUrl={setPreviousUrl}
        setPokemonUrl={setPokemonUrl}
        url={url}
        loading={loading}
      />
      <PokeInfo pokemonData={pokemonData} pokemon={pokemon} loading={loading}/>
      <Pagination
        nextButton={nextUrl ? nextButton : null}
        previousButton={previousUrl ? previousButton : null}
        loading={loading}
      />
    </>
  );
}

export default App;
