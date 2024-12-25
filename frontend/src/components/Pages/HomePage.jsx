import React, { useContext, useEffect } from "react";
import DisplayCount from "../Pokemon Count/DisplayCount";
import PokemonList from "../Layouts/PokemonListLayout";
import UpdatePokemonCount from "../Pokemon Count/UpdatePokemonCount";
import DefaultLayout from "../Layouts/DefaultLayout";
import { PokemonContext } from "../States/StateContext";
import FetchPokemon from "../API/FetchAllPokemon";

const HomePage = () => {
  return (
    <DefaultLayout>
      <DisplayCount />
      <PokemonList />
      <FetchPokemon/>
      <UpdatePokemonCount />
    </DefaultLayout>
  );
};

export default HomePage;
