import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../States/StateContext";
import SpinningPokeballLoader from "../helpers/SpinningPokeballLoader";
import PokemonDataLayout from "../Layouts/PokemonDataLayout";
import axios from "axios";
import { useQuery } from '@tanstack/react-query';

// Function to fetch moves data using React Query
const fetchMovesData = async (pokemonFound) => {
  const moves_Promise = pokemonFound.moves
    .filter((move) => move.move.url)
    .map((move) =>
      axios.get(move.move.url).catch((err) => ({ error: err, move }))
    );

  const moves_Response = await Promise.all(moves_Promise);

  return moves_Response
    .filter((response) => !response.error)
    .map((response) => response.data);
};

// Function to fetch species data
const fetchSpeciesData = async (speciesUrl) => {
  const response = await axios.get(speciesUrl);
  return response.data;
};

// Function to fetch evolution data
const fetchEvolutionData = async (evolutionUrl) => {
  const response = await axios.get(evolutionUrl);
  return response.data;
};

// Function to fetch abilities data
const fetchAbilitiesData = async (abilities) => {
  const ability_Promise = abilities.map((ability) => axios.get(ability.ability.url));
  const ability_Response = await Promise.all(ability_Promise);
  return ability_Response.map((response) => response.data);
};

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

  // Find the pokemon based on the URL parameter
  const findPokemon = () => {
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
  };

  // Fetch Moves Data using React Query
  const { data: movesData, isLoading: isMovesLoading, error: movesError } = useQuery({
    queryKey: ['moves', name],
    queryFn: () => fetchMovesData(allPokemons.find((poke) => poke.name.toLowerCase() === name.toLowerCase())),
    enabled: !!name,
    staleTime: 1000 * 60 * 10,
  });

  // Fetch Species Data using React Query
  const { data: speciesData, isLoading: isSpeciesLoading, error: speciesError } = useQuery({
    queryKey: ['species', name],
    queryFn: () => {
      const pokemonFound = allPokemons.find((poke) => poke.name.toLowerCase() === name.toLowerCase());
      return pokemonFound ? fetchSpeciesData(pokemonFound.species.url) : null;
    },
    enabled: !!name,
    staleTime: 1000 * 60 * 10,
  });

  // Fetch Evolution Data using React Query
  const { data: evolutionData, isLoading: isEvolutionLoading, error: evolutionError } = useQuery({
    queryKey: ['evolution', name],
    queryFn: () => {
      if (speciesData) {
        return fetchEvolutionData(speciesData.evolution_chain.url);
      }
      return null;
    },
    enabled: !!speciesData, // Ensure this query runs only after species data is fetched
    staleTime: 1000 * 60 * 10,
  });

  // Fetch Ability Data using React Query
  const { data: abilitiesData, isLoading: isAbilitiesLoading, error: abilitiesError } = useQuery({
    queryKey: ['abilities', name],
    queryFn: () => {
      const pokemonFound = allPokemons.find((poke) => poke.name.toLowerCase() === name.toLowerCase());
      return pokemonFound ? fetchAbilitiesData(pokemonFound.abilities) : [];
    },
    enabled: !!name,
    staleTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    findPokemon();
  }, [name, allPokemons]);

  // Set the moves, species, evolution, and abilities data after fetching is done
  useEffect(() => {
    if (movesData) {
      setMovesData(movesData);
    }
    if (speciesData) {
      setSpeciesData(speciesData);
    }
    if (evolutionData) {
      setEvolutionChain(evolutionData.chain);
    }
    if (abilitiesData) {
      setAbilityEffect(abilitiesData);
    }
  }, [movesData, speciesData, evolutionData, abilitiesData, setMovesData, setSpeciesData, setEvolutionChain, setAbilityEffect]);

  // Show loader if data is loading
  if (!pokemonInfo || isMovesLoading || isSpeciesLoading || isEvolutionLoading || isAbilitiesLoading) {
    return <SpinningPokeballLoader />;
  }

  // If error fetching data
  if (movesError || speciesError || evolutionError || abilitiesError) {
    console.error("Error fetching data:", movesError || speciesError || evolutionError || abilitiesError);
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <PokemonDataLayout />
    </div>
  );
};

export default PokemonDataHandler;
