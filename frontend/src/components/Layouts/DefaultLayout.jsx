import React, { useContext } from "react";
import Header from "../Head/Header";
import SearchResults from "../Head/Search Bar/SearchResults";
import { PokemonContext } from "../States/StateContext";

const DefaultLayout = ({ children }) => {
  const { searchBarVisibility } = useContext(PokemonContext);
  return (
    <div>
      <Header />
      {searchBarVisibility && <SearchResults />}
      {children}
    </div>
  );
};

export default DefaultLayout;
