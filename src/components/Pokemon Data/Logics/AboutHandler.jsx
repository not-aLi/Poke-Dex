import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import getTypeStyles from "./getTypeStyles";
import About from "../Sub Layouts/About";

const AboutHandler = () => {
  const { speciesData, pokemonInfo } = useContext(PokemonContext);

  const gameVersions = [
    "violet",
    "scarlet",
    "legends-arceus",
    "sword",
    "shield",
    "sun",
    "moon",
    "omega-ruby",
    "alpha-sapphire",
    "x",
    "y",
    "ultra-sun",
    "ultra-moon",
    "lets-go-pikachu",
    "lets-go-eevee",
    "red",
    "blue",
    "gold",
    "silver",
  ];
  /**
   * The function `renderFlavorText` iterates through flavor text entries in `speciesData`, filters for
   * English language and specific game versions, and returns the flavor text in a styled div element
   * or "no data" if no match is found.
   * @returns The `renderFlavorText` function returns a JSX element containing the flavor text of a
   * Pokémon species in English for a specific game version. If the flavor text is found, it is
   * displayed within a `<div>` element with a key attribute and a class name of "text-white". If no
   * matching data is found, it returns a `<div>` element with the text "no data".
   */
  const renderFlavorText = () => {
    for (const text of speciesData.flavor_text_entries) {
      if (
        text.language.name === "en" &&
        gameVersions.includes(text.version.name)
      ) {
        return (
          <div key={text.version.name} className="text-white">
            <p className="md:text-xl text-base">{text.flavor_text}</p>
          </div>
        );
      }
    }
    return <div>no data</div>;
  };

  /**
   * The function `renderTypeColor` returns the style object for the primary type of a Pokemon based on
   * the `pokemonInfo` data.
   * @returns The `renderTypeColor` function returns the styles for the primary type of a Pokemon, based
   * on the `pokemonInfo` object. If `pokemonInfo` is available, it extracts the primary type of the
   * Pokemon and then calls the `getTypeStyles` function to get the corresponding styles for that type.
   * If `pokemonInfo` is not available, an empty object is returned.
   */
  const renderTypeColor = () => {
    if (pokemonInfo) {
      const primaryType = pokemonInfo.types[0].type.name;
      return getTypeStyles(primaryType);
    }
    return {};
  };

  return (
    <div>
      <About
        renderFlavorText={renderFlavorText}
        renderTypeColor={renderTypeColor}
      />
    </div>
  );
};

export default AboutHandler;
