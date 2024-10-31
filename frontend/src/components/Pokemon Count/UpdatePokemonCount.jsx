import React, { useContext } from "react";
import PaginationHandler from "../Pagination/PaginationHandler";
import { PokemonContext } from "../States/StateContext";
const UpdatePokemonCount = () => {
  const {
    setDisplayedPokemonCount,
    pokemon,
    setUrl,
    loading,
    previousUrl,
    nextUrl,
  } = useContext(PokemonContext);

  const updateDisplayedPokemonCount = (operation) => {
    setDisplayedPokemonCount((prevCount) => {
      if (operation === "increment") {
        return prevCount + pokemon.length;
      } else if (operation === "decrement") {
        return Math.max(prevCount - pokemon.length, 0);
      } else {
        return prevCount;
      }
    });
  };

  return (
    <div>
      <PaginationHandler
        setUrl={setUrl}
        previousUrl={previousUrl}
        nextUrl={nextUrl}
        updateDisplayedPokemonCount={updateDisplayedPokemonCount}
        loading={loading}
      />
    </div>
  );
};

export default UpdatePokemonCount;
