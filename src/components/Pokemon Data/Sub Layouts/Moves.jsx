import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import CapitilizeFirstLetter from "../../helpers/CapitilizeFirstLetter";
import SpinningPokeballLoader from "../../helpers/SpinningPokeballLoader";

const Moves = ({ renderColor }) => {
  const { pokemonInfo, movesData } = useContext(PokemonContext);

  if (!movesData) {
    return <SpinningPokeballLoader />;
  }

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-white text-2xl md:text-3xl font-semibold mt-4 mb-4">
        Moves
      </h1>
      <div
        className="bg-gray-800 p-4 rounded-lg shadow-md w-full overflow-y-auto max-w-sm md:max-w-md lg:max-w-full"
        style={{ maxHeight: "300px" }}
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Power
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Accuracy
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Effect
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pokemonInfo.moves.map((move, index) => {
              const moveData = movesData.find(
                (data) => data.name === move.move.name
              );

              return (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {CapitilizeFirstLetter(move.move.name)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div
                      className="rounded-lg flex items-start py-2 justify-center"
                      style={renderColor(moveData?.type?.name)}
                    >
                      {moveData
                        ? CapitilizeFirstLetter(moveData.type.name)
                        : "Type not available"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                    {moveData ? moveData.power || "-" : "Power not available"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                    {moveData
                      ? moveData.accuracy || "-"
                      : "Accuracy not available"}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-gray-100"
                    style={{ maxHeight: "60px", overflowY: "auto" }}
                  >
                    <div
                      style={{
                        maxHeight: "60px",
                        overflowY: "auto",
                        width: "250px",
                      }}
                    >
                      {moveData
                        ? moveData.effect_entries[0]?.effect ||
                          "Effect not available"
                        : "Effect not available"}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Moves;
