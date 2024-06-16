import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../States/StateContext";
import SpinningPokeballLoader from "../helpers/SpinningPokeballLoader";
import PokemonDataLayout from "../Layouts/PokemonDataLayout";
import axios from "axios";

const PokemonDataHandler = () => {
  const { name } = useParams();
  const {
    allPokemons,
    setPokemonInfo,
    pokemonInfo,
    setIsShiny,
    setSpeciesData,
    setEvolutionChain,
    setAbilityEffect
  } = useContext(PokemonContext);

 

  const findPokemon = async () => {
    const pokemonFound = allPokemons.find(
      (poke) => poke.name.toLowerCase() === name.toLowerCase()
    );
    setPokemonInfo(pokemonFound);
    setIsShiny(false);
    try {
      if (pokemonFound) {
        // fetching Species Data
        const response = await axios.get(pokemonFound.species.url);
        const specie = response.data;
        setSpeciesData(specie);
       
        // fetching Evolution Data
        const species_Response = await axios.get(specie.evolution_chain.url);
        const evolution = species_Response.data;
        setEvolutionChain(evolution.chain);

        // fetching Ability Data
        const ability_Promise = pokemonFound.abilities.map((ability) =>
          axios.get(ability.ability.url)
        );
        const ability_Response = await Promise.all(ability_Promise);
        const ability_Data = ability_Response.map((response) => response.data);
        setAbilityEffect(ability_Data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    findPokemon();
  }, [name, allPokemons]);

  if (!pokemonInfo) {
    return <SpinningPokeballLoader />;
  }
  return (
    <div>
      <PokemonDataLayout/>
    </div>
  );
};

export default PokemonDataHandler;
