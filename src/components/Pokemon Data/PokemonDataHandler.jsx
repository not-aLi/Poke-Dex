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
    setAbilityEffect,
    setMovesData,
  } = useContext(PokemonContext);

  const findPokemon = async () => {
    if (!allPokemons || allPokemons.length === 0) {
      console.error("allPokemons is undefined or empty", allPokemons);
      return;
    }

    if (!name) {
      console.error("Pokemon name from useParams is undefined", name);
      return;
    }

    const pokemonFound = allPokemons.find(
      (poke) => poke.name && poke.name.toLowerCase() === name.toLowerCase()
    );

    if (!pokemonFound) {
      console.error(`Pokemon with the name "${name}" not found`);
      return;
    }

    setPokemonInfo(pokemonFound);
    setIsShiny(false);

    try {
      // Fetching Species Data
      const response = await axios.get(pokemonFound.species.url);
      const specie = response.data;
      setSpeciesData(specie);

      // Fetching Evolution Data
      const species_Response = await axios.get(specie.evolution_chain.url);
      const evolution = species_Response.data;
      setEvolutionChain(evolution.chain);

      // Fetching Ability Data
      const ability_Promise = pokemonFound.abilities.map((ability) =>
        axios.get(ability.ability.url)
      );
      const ability_Response = await Promise.all(ability_Promise);
      const ability_Data = ability_Response.map((response) => response.data);
      setAbilityEffect(ability_Data);

      // Fetching Moves Data
      const moves_Promise = pokemonFound.moves
        .filter((move) => move.move.url)
        .map((move) =>
          axios.get(move.move.url).catch((err) => ({ error: err, move }))
        );

      const moves_Response = await Promise.all(moves_Promise);
      const moves_Data = moves_Response
        .filter((response) => !response.error)
        .map((response) => response.data);

      setMovesData(moves_Data);
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
      <PokemonDataLayout />
    </div>
  );
};

export default PokemonDataHandler;
