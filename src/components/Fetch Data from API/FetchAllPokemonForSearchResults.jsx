import axios from "axios";
import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../States/StateContext";

function FetchAllPokemon() {
  const { setAllPokemons } = useContext(PokemonContext);

  const getPokemon = async () => {
    try {
      let response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      let pokemons = response.data.results;

      const batchSize = 100;
      let pokemonInformation = [];
      for (let i = 0; i < pokemons.length; i += batchSize) {
        const pokemonBatch = pokemons.slice(i, i + batchSize);
        const pokemonBatchData = await Promise.all(
          pokemonBatch.map((poke) =>
            axios.get(poke.url).then((response) => response.data)
          )
        );
        pokemonInformation = [...pokemonInformation, ...pokemonBatchData];
        setAllPokemons([...new Set(pokemonInformation)]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);

  return null;
}
export default FetchAllPokemon;
