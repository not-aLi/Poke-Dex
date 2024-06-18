import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import CapitilizeFirstLetter from "../../helpers/CapitilizeFirstLetter";

const Abilities = ({ toggleAbilityDetailBox, renderTypeColor }) => {
  const { pokemonInfo, abilityDetailBox, abilityEffect, currentAbilityIndex } =
    useContext(PokemonContext);

  return (
    <div>
      <div className="relative flex md:flex-row flex-col items-center p-2 ">
        <div className="flex flex-col items-center md:items-start p-2 md:m-2 gap-2">
          <h1 className="text-white text-xl md:text-2xl md:ml-2 font-semibold">
            Abilities:
          </h1>
          <div className="flex items-center md:items-start md:flex-col mb-6 ">
            {pokemonInfo.abilities.map((ability, index) => (
              <div
                className="flex items-center justify-center  md:items-start md:flex-row flex-wrap md:flex-nowrap"
                key={index}
              >
                <span
                  onClick={() => toggleAbilityDetailBox(index)}
                  key={index}
                  className={`text-white p-2 m-2 rounded-lg hover:opacity-80 transition-all duration-75 cursor-pointer ${
                    ability.is_hidden
                      ? "bg-gray-600 cursor-pointer hover:opacity-80 transition-all duration-75"
                      : "bg-gray-500"
                  }`}
                  style={!ability.is_hidden ? renderTypeColor() : {}}
                >
                  {CapitilizeFirstLetter(ability.ability.name)}
                </span>
                <span className="text-white md:mt-4 opacity-70 text-xs md:text-sm">
                  {ability.is_hidden ? "(Hidden Ability)" : "(Ability)"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ability Detail Box */}
        <div
          className={`md:block absolute top-24 md:static  md:z-10 transition-all duration-100 ease-in-out flex mb-2 ${
            !abilityDetailBox
              ? "md:max-h-0 hidden md:opacity-0 "
              : "md:max-h-40 block md:opacity-100"
          }`}
        >
          <div className="md:z-40  text-white p-4 m-6 max-w-full md:w-80 flex-wrap flex items-center flex-1 rounded-lg bg-slate-600 shadow-lg">
            <h1 className="text-2xl font-semibold mb-2">About Ability:</h1>{" "}
            <p>
              {currentAbilityIndex !== null &&
              abilityEffect[currentAbilityIndex] &&
              abilityEffect[currentAbilityIndex].effect_entries.find(
                (entry) => entry.language.name === "en"
              )
                ? abilityEffect[currentAbilityIndex].effect_entries.find(
                    (entry) => entry.language.name === "en"
                  ).effect
                : "No Data available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
