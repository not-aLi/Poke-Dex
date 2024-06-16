import React, { useContext } from "react";
import { PokemonContext } from "../States/StateContext";

const DisplayCount = () => {
  const { displayedPokemonCount, totalPokemonCount, loading } =
    useContext(PokemonContext);

  return (
    <div>
      {!loading ? (
        <div className="flex justify-center items-center text-white bg-gray-800 bg-opacity-75 p-2 border-t-2 border-gray-800 border-opacity-90">
          <p>
            Showing{" "}
            <span className="text-yellow-400">{displayedPokemonCount}</span> out
            of <span className="text-yellow-400">{totalPokemonCount}</span>{" "}
            Pokémon
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default DisplayCount;
