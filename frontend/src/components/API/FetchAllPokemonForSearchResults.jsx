import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { PokemonContext } from "../States/StateContext";

const fetchPokemonData = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  const pokemons = response.data.results;

  const batchSize = 50;
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
  const { setAllPokemons, setFetching } = useContext(PokemonContext);

  const { data, isFetching } = useQuery({
    queryKey:["Pokemon"], 
    queryFn:fetchPokemonData, 
    
      staleTime: 1000 * 60 * 10, 
    }
);

  useEffect(() => {
    if (data) {
      setAllPokemons(data);
    }
  }, [data, setAllPokemons]);

  useEffect(() => {
    if (isFetching) {
      setFetching(true);
    }else{
      setFetching(false)
    }
  }, [isFetching]);

  return null; 
}

export default FetchAllPokemon;
