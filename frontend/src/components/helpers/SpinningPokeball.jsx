import React from "react";
import pokeball from "../../assets/pokeball.png";

const SpinningPokeball = () => {
  return (
    <div className="">
      <img src={pokeball} alt="Loading..." className="animate-spin h-4 w-4" />
    </div>
  );
};

export default SpinningPokeball;
