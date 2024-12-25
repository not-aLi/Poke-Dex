import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FetchAllPokemon from "./FetchAllPokemonForSearchResults";
import { PokemonContext } from "../States/StateContext";
import {useQuery} from "@tanstack/react-query";


const fetchPokemon=async(url)=>{
  let response = await axios.get(url);
      let pokemons = response.data.results;
      let pokeInformation = await Promise.all(
        pokemons.map((poke) =>
          axios.get(poke.url).then((response) => response.data)
        )
      );
      return{
        pokemon: pokeInformation,
        nextUrl: response.data.next,
        previousUrl: response.data.previous,
        totalPokemonCount: response.data.count,
      };

};
const FetchPokemon = () => {
  const {
    setPokemon,
    setLoading,
    setNextUrl,
    setPreviousUrl,
    url,
    setTotalPokemonCount,
  } = useContext(PokemonContext);

  const {isLoading,data} = useQuery({
    queryKey:['Pokemon',url],
    queryFn:()=>fetchPokemon(url),
    keepPreviousData:true,

  })

 useEffect(() => {
    if (data) {
      setPokemon(data.pokemon);
      setNextUrl(data.nextUrl);
      setPreviousUrl(data.previousUrl);
      setTotalPokemonCount(data.totalPokemonCount);
    }
  }, [data, setPokemon, setNextUrl, setPreviousUrl, setTotalPokemonCount]);

  useEffect(() => {
    setLoading(isLoading );
  }, [isLoading, setLoading]);


  return (
    <div>
      <FetchAllPokemon />
    </div>
  );
};

export default FetchPokemon;
