import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import HeightConversion from "../../helpers/HeightConversion";
import WeightConversion from "../../helpers/WeightConversion";

const AdditionalInformation = () => {
  const { pokemonInfo, speciesData } = useContext(PokemonContext);

  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="w-full grid grid-cols-2 gap-2">
        <div className="flex-1 p-2">
          <ul className="text-white space-y-2">
            <li className="mb-4">
              <strong>Height: </strong>
              {HeightConversion(pokemonInfo.height)}
            </li>
            <li>
              <strong>Weight: </strong>
              {WeightConversion(pokemonInfo.weight)}
            </li>
          </ul>
        </div>
        <div className="flex-1 p-2">
          <ul className="text-white space-y-2 ">
            <li className="mb-4">
              <strong>Base Experience: </strong>
              {pokemonInfo.base_experience}
            </li>
            <li>
              <strong>Capture Rate: </strong>
              {speciesData && speciesData.capture_rate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
