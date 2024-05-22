import axios from "axios";
import React, { useEffect, useState } from "react";
const capitilizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.substring(1);
};

function PokemonList({
  setPokemon,
  setLoading,
  setPokemonData,
  setNextUrl,
  setPreviousUrl,
  url,
  loading,
}) {
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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, [url]);
}
export { capitilizeFirstLetter };
export default PokemonList;
