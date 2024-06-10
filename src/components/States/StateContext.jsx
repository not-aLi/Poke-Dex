import React,{ createContext,useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) =>{
  const [pokemon, setPokemon] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=50");
  const [searchBarVisibility, setSearchBarVisibility] = useState(false);
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [displayedPokemonCount, setDisplayedPokemonCount] = useState(50);
  const [searchInput, setSearchInput] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        allPokemons,
        setAllPokemons,
        loading,
        setLoading,
        nextUrl,
        setNextUrl,
        previousUrl,
        setPreviousUrl,
        url,
        setUrl,
        searchBarVisibility,
        setSearchBarVisibility,
        totalPokemonCount,
        setTotalPokemonCount,
        displayedPokemonCount,
        setDisplayedPokemonCount,
        searchInput,
        setSearchInput,
        filteredSearch,
        setFilteredSearch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
export default PokemonProvider;