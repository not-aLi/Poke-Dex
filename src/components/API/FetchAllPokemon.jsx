import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FetchAllPokemon from "./FetchAllPokemonForSearchResults";
import { PokemonContext } from "../States/StateContext";

const FetchPokemon = () => {
  const {
    setPokemon,
    setLoading,
    setNextUrl,
    setPreviousUrl,
    url,
    setTotalPokemonCount,
  } = useContext(PokemonContext);

  const getPokemon = async () => {
    try {
      setLoading(true);
      let response = await axios.get(url);
      let pokemons = response.data.results;
      let pokeInformation = await Promise.all(
        pokemons.map((poke) =>
          axios.get(poke.url).then((response) => response.data)
        )
      );
      setPokemon(pokeInformation);
      setNextUrl(response.data.next);
      setPreviousUrl(response.data.previous);
      setTotalPokemonCount(response.data.count);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, [url]);

  return (
    <div>
      <FetchAllPokemon />
    </div>
  );
};

export default FetchPokemon;
