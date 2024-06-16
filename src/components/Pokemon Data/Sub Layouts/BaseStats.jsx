import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import Defense from "../../../assets/Defense.png";
import Attack from "../../../assets/Attack.png";
import Sp_Attack from "../../../assets/Special_Attack.png";
import Sp_Defense from "../../../assets/Special_Defense.png";
import Speed from "../../../assets/Speed.png";
import { FaHeart } from "react-icons/fa";

const BaseStats = () => {
  const { pokemonInfo } = useContext(PokemonContext);
  return (
    <div className="flex flex-col items-center flex-wrap">
      <h1 className="text-white text-2xl md:text-3xl font-semibold mb-2">
        Base Stats
      </h1>
      <div className="flex flex-row flex-wrap p-4">
        <div className="flex-1">
          <ul className="text-white p-4 mr-4">
            <li className="flex items-center gap-2 mb-4">
              <FaHeart className="text-red-500" />
              <strong>HP:</strong>{" "}
              {pokemonInfo.stats.find((stat) => stat.stat.name === "hp")
                .base_stat || "0"}
            </li>
            <li className="flex items-center gap-2 mb-4">
              <img src={Defense} className="h-4" />
              <strong>Defense:</strong>{" "}
              {pokemonInfo.stats.find((stat) => stat.stat.name === "defense")
                .base_stat || "0"}
            </li>
            <li className="flex items-center gap-2">
              <img src={Attack} className="h-4" />
              <strong>Attack:</strong>{" "}
              {pokemonInfo.stats.find((stat) => stat.stat.name === "attack")
                .base_stat || "0"}
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="text-white p-2 my-2">
            <li className="flex items-center gap-2 mb-4">
              <img src={Speed} className="h-4" />
              <strong>Speed:</strong>{" "}
              {pokemonInfo.stats.find((stat) => stat.stat.name === "speed")
                .base_stat || "0"}
            </li>
            <li className="flex items-center gap-2 mb-4">
              <img src={Sp_Defense} className="h-4" />
              <strong>Sp.Defense:</strong>{" "}
              {pokemonInfo.stats.find(
                (stat) => stat.stat.name === "special-defense"
              ).base_stat || "0"}
            </li>
            <li className="flex items-center gap-2">
              <img src={Sp_Attack} className="h-4" />
              <strong>Sp.Attack:</strong>{" "}
              {pokemonInfo.stats.find(
                (stat) => stat.stat.name === "special-attack"
              ).base_stat || "0"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BaseStats;
