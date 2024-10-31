import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=50");
  const [searchBarVisibility, setSearchBarVisibility] = useState(false);
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [displayedPokemonCount, setDisplayedPokemonCount] = useState(50);
  const [searchInput, setSearchInput] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [isShiny,setIsShiny] = useState(false);
  const [favorite,setFavorite] = useState([]);
  const [isFavorite,setIsFavorite] = useState(false);
  const [speciesData, setSpeciesData] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [abilityDetailBox, setAbilityDetailBox] = useState(false);
  const [abilityEffect, setAbilityEffect] = useState(null);
  const [currentAbilityIndex, setCurrentAbilityIndex] = useState(null);
  const [movesData, setMovesData] = useState(null);


  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        allPokemons,
        setAllPokemons,
        pokemonInfo,
        setPokemonInfo,
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
        isShiny,
        setIsShiny,
        favorite,
        setFavorite,
        isFavorite,
        setIsFavorite,
        speciesData,
        setSpeciesData,
        evolutionChain,
        setEvolutionChain,
        abilityDetailBox,
        setAbilityDetailBox,
        abilityEffect,
        setAbilityEffect,
        currentAbilityIndex,
        setCurrentAbilityIndex,
        movesData,
        setMovesData
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
