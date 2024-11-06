import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import GuestFavoriteButton from "../Sub Layouts/GuestFavoriteButton";
import { toast } from "sonner";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CapitilizeFirstLetter from "../../helpers/CapitilizeFirstLetter";

const GuestFavoriteButtonHandler = () => {
  const { setIsFavorite, favorite, setFavorite, pokemonInfo, isFavorite } =
    useContext(PokemonContext);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  /**
   * The `addToFavorites` function toggles a Pokemon between being a favorite and not a favorite in a
   * React application.
   */
  const addToFavorites = (pokemon) => {
    if (!favorite.some((poke) => poke.id === pokemon.id)) {
      setFavorite([...favorite, pokemon]);
      toast(
        <div className="flex items-center justify-center font-medium gap-2 bg-red-200 border-l-4 border-red-500 p-2.5 rounded-md text-red-700 shadow-md">
          <FaHeart className="text-red-500" />
          <span>{`${CapitilizeFirstLetter(
            pokemon.name
          )} has been successfully added to your favorites!`}</span>
        </div>,
        {
          style: {
            backgroundColor: "transparent",
            padding: "0",
            boxShadow: "none",
          },
        }
      );
    } else {
      setFavorite(favorite.filter((poke) => poke.id !== pokemon.id));
      toast(
        <div className="flex items-center justify-center gap-2 bg-gray-200 font-medium border-l-4 border-gray-500 p-2.5 rounded-md text-gray-700 shadow-md">
          <FaRegHeart className="text-gray-500" />
          <span>{`${CapitilizeFirstLetter(
            pokemon.name
          )} has been removed from your favorites!`}</span>
        </div>,
        {
          style: {
            backgroundColor: "transparent",
            padding: "0",
            boxShadow: "none",
          },
        }
      );
    }
    toggleFavorite();
  };

  /* The line `const is_Favorite = favorite.some((poke) => poke.id === pokemonInfo.id);` is checking if
 the current `pokemonInfo` object is present in the `favorite` array. It uses the `some` method to
 iterate over the `favorite` array and return `true` if at least one element in the array satisfies
 the condition `(poke.id === pokemonInfo.id)`. */
  const is_Favorite = favorite.some((poke) => poke.id === pokemonInfo.id);

  return (
    <div>
      <GuestFavoriteButton
        addToFavorites={() => addToFavorites(pokemonInfo)}
        isFavorite={is_Favorite}
      />
    </div>
  );
};

export default GuestFavoriteButtonHandler;
