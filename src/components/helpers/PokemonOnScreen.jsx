import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../States/StateContext";

const PokemonOnScreen = () => {
  const { setUrl } = useContext(PokemonContext);

  const pokemonNumbers = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setUrl("https://pokeapi.co/api/v2/pokemon?limit=20");
    } else if (width < 768) {
      setUrl("https://pokeapi.co/api/v2/pokemon?limit=30");
    } else if (width < 1024) {
      setUrl("https://pokeapi.co/api/v2/pokemon?limit=40");
    } else if (width < 1280) {
      setUrl("https://pokeapi.co/api/v2/pokemon?limit=60");
    } else if (width < 1536) {
      setUrl("https://pokeapi.co/api/v2/pokemon?limit=80");
    } else {
      setUrl("https://pokeapi.co/api/v2/pokemon?limit=100");
    }
  };
  useEffect(() => {
    pokemonNumbers();
    window.addEventListener("resize", pokemonNumbers);

    return () => window.removeEventListener("resize", pokemonNumbers);
  }, [pokemonNumbers]);
  return <div></div>;
};

export default PokemonOnScreen;
