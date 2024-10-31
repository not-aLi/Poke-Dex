import React from "react";
import pokeball from "../../assets/pokeball.png";

const SpinningPokeballLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <img src={pokeball} alt="Loading..." className="animate-spin h-14 w-14" />
    </div>
  );
};

export default SpinningPokeballLoader;
