import React, { useContext } from "react";
import { PokemonContext } from "../States/StateContext";
import Image from "../Pokemon Data/Sub Layouts/Image";
import FavoriteButtonHandler from "../Pokemon Data/Logics/FavoriteButtonHandler";
import ShinyButtonHandler from "../Pokemon Data/Logics/ShinyButtonHandler";
import Name from "../Pokemon Data/Sub Layouts/Name";
import TypesHandler from "../Pokemon Data/Logics/TypesHandler";
import AboutHandler from "../Pokemon Data/Logics/AboutHandler";
import AbilitiesHandler from "../Pokemon Data/Logics/AbilitiesHandler";
import BaseStats from "../Pokemon Data/Sub Layouts/BaseStats";
import AdditionalInformation from "../Pokemon Data/Sub Layouts/AdditionalInformation";
import EvolutionChainHandler from "../Pokemon Data/Logics/EvolutionChainHandler";
import MovesHandler from "../Pokemon Data/Logics/MovesHandler";
import FormsHandler from "../Pokemon Data/Logics/FormsHandler";
import DefaultLayout from "./DefaultLayout";

const PokemonDataLayout = () => {
  const { pokemonInfo } = useContext(PokemonContext);

  return (
    <DefaultLayout>
      <div className="min-h-screen min-w-screen flex items-center flex-col md:items-center  overflow-hidden">
        {/* Section for Image, Name, Buttons, About and Type */}
        {pokemonInfo && (
          <div className="flex flex-col md:flex-row items-center mt-4 p-2 m-4">
            {/* Pokemon Image */}
            <div className="flex flex-col items-center">
              <Image />

              {/* Section for Add to Favorites and Shiny Buttons */}
              <div className="flex items-center justify-center gap-8">
                {/* Add-To-Favorites Button */}
                <FavoriteButtonHandler />

                {/* Shiny Button */}
                <ShinyButtonHandler />
              </div>
            </div>

            {/* Pokemon Name and Type Section */}
            <div className="flex flex-wrap items-center flex-col">
              {/* Pokemon Name */}
              <Name />

              {/* Pokemon Type */}
              <TypesHandler />
            </div>

            {/* About Pokemon Section */}
            <AboutHandler />
          </div>
        )}

        {/* Abilities ,Base Stats and Additional Info Section */}
        {pokemonInfo && (
          <div className=" flex md:flex-row flex-col flex-wrap ">
            {/* Abilities */}
            <AbilitiesHandler />

            {/* Base Stats */}
            <BaseStats />

            {/* Additional Info */}
            <AdditionalInformation />
          </div>
        )}
        {/* Evolution Chain Section */}
        {pokemonInfo && (
          <div className="flex flex-row justify-center items-center">
            <EvolutionChainHandler />
          </div>
        )}

        {/* Moves Section */}
        {pokemonInfo && (
          <div>
            <MovesHandler />
          </div>
        )}

        {/* Forms Section */}
        {pokemonInfo && (
          <div>
            <FormsHandler />
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default PokemonDataLayout;
