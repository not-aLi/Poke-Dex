import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import CapitilizeFirstLetter from "../../helpers/CapitilizeFirstLetter";

const About = ({ renderFlavorText, renderTypeColor }) => {
  const { speciesData, pokemonInfo } = useContext(PokemonContext);
  return (
    <div>
      <div
        className="border-2 flex flex-wrap flex-1 p-4 items-start md:ml-12 rounded-lg m-2"
        style={renderTypeColor()}
      >
        <h1 className="text-white md:text-4xl text-2xl font-semibold mb-4 w-full">
          About {CapitilizeFirstLetter(pokemonInfo.name)}:
        </h1>
        {speciesData &&
          speciesData.flavor_text_entries &&
          speciesData.flavor_text_entries.length > 0 && (
            <div>{renderFlavorText()}</div>
          )}
      </div>
    </div>
  );
};

export default About;
