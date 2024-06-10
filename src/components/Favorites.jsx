import React, { useContext } from "react";
import Header from "./Head/Header";
import { PokemonContext } from "./States/StateContext";
const Favorites = () => {
  const {
    loading,
    searchBarVisibility,
    setSearchBarVisibility,
    setSearchInput,
  } = useContext(PokemonContext);
  return (
    <div>
      <Header
        loading={loading}
        search={searchBarVisibility}
        setSearchBarVisibility={setSearchBarVisibility}
        searchBarVisibility={searchBarVisibility}
        setSearchInput={setSearchInput}
      />
      <h1>This is Favorites</h1>
    </div>
  );
};

export default Favorites;
