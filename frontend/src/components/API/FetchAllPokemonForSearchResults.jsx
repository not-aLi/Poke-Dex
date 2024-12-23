import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { PokemonContext } from "../States/StateContext";

const fetchPokemonData = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  const pokemons = response.data.results;

  const batchSize = 100;
  let allPokemonData = [];

  for (let i = 0; i < pokemons.length; i += batchSize) {
    const pokemonBatch = pokemons.slice(i, i + batchSize);
    const batchDetails = await Promise.all(
      pokemonBatch.map((poke) =>
        axios.get(poke.url).then((response) => response.data)
      )
    );
    allPokemonData = [...allPokemonData, ...batchDetails];
  }

  return allPokemonData; 
};

function FetchAllPokemon() {
  const { setAllPokemons } = useContext(PokemonContext);

  const { data } = useQuery({
    queryKey:["allPokemons"], 
    queryFn:fetchPokemonData, 
    
      staleTime: 1000 * 60 * 10, 
      refetchOnWindowFocus: false, 
    }
);

  useEffect(() => {
    if (data) {
      setAllPokemons(data);
    }
  }, [data, setAllPokemons]);

  return null; 
}

export default FetchAllPokemon;
