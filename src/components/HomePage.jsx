import React, { useContext } from "react";
import DisplayCount from "../components/Pokemon Count/DisplayCount";
import FetchAllPokemon from "../components/Fetch Data from API/FetchAllPokemon";
import PokeInfo from "../components/PokeInfo";
import UpdatePokemonCount from "../components/Pokemon Count/UpdatePokemonCount";
import { PokemonContext } from "./States/StateContext";
import Header from "./Head/Header";

const HomePage = () => {
  const {
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
  } = useContext(PokemonContext);

  return (
    <>
    <Header
        loading={loading}
        search={searchBarVisibility}
        setSearchBarVisibility={setSearchBarVisibility}
        searchBarVisibility={searchBarVisibility}
        setSearchInput={setSearchInput}
      />
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
        setSearchInput={setSearchInput}
        setFilteredSearch={setFilteredSearch}
        searchInput={searchInput}
        filteredSearch={filteredSearch}
        allPokemons={allPokemons}
        setSearchBarVisibility={setSearchBarVisibility}
        searchBarVisibility={searchBarVisibility}
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
};

export default HomePage;
