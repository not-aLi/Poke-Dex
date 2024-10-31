import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import ShinyButton from "../Sub Layouts/ShinyButton";

const ShinyButtonHandler = () => {
  const { setIsShiny, isShiny } = useContext(PokemonContext);
  const toggleShiny = () => {
    setIsShiny(!isShiny);
  };

  return (
    <div>
      <ShinyButton toggleShiny={toggleShiny} />
    </div>
  );
};

export default ShinyButtonHandler;
