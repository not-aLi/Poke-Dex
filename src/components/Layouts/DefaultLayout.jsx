import React from "react";
import Header from "../Head/Header";
import UpdatePokemonCount from "../Pokemon Count/UpdatePokemonCount";
import DisplayCount from "../Pokemon Count/DisplayCount";
import FetchAllPokemon from "../Fetch Data from API/FetchAllPokemon";
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <FetchAllPokemon />
      <DisplayCount />
      {children}
      <UpdatePokemonCount />
    </div>
  );
};

export default DefaultLayout;
