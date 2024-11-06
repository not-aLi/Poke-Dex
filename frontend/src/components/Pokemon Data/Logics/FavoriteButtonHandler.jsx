import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import FavoriteButton from "../Sub Layouts/FavoriteButton";
import { toast } from "sonner";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavoriteButtonHandler = () => {
  const {
    setIsFavorite,
    pokemonInfo,
    isFavorite,
    addFavorite,
    removeFavorite,
    user,
  } = useContext(PokemonContext);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  /**
   * The `addToFavorites` function toggles a Pokemon between being a favorite and not a favorite in a
   * React application.
   */
  const addToFavorites = async () => {
    const { id: pokemonId, name, sprites } = pokemonInfo;
    const spriteUrl = sprites.front_default;

    try {
      const existingFavorite = user.favorites.find(
        (poke) => poke.pokemonId === pokemonId
      );

      if (!existingFavorite) {
        const response = await addFavorite(pokemonId, name, spriteUrl);
        toast(
          <div className="flex items-center justify-center font-medium gap-2 bg-red-200 border-l-4 border-red-500 p-2.5 rounded-md text-red-700 shadow-md">
            <FaHeart className="text-red-500" />
            <span>{response?.data?.message || "Added to favorites!"}</span>
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
        const response = await removeFavorite(existingFavorite._id);
        toast(
          <div className="flex items-center justify-center gap-2 bg-gray-200 font-medium border-l-4 border-gray-500 p-2.5 rounded-md text-gray-700 shadow-md">
            <FaRegHeart className="text-gray-500" />
            <span>{response?.data?.message || "Removed from favorites!"}</span>
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
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  /* The line `const is_Favorite = favorite.some((poke) => poke.id === pokemonInfo.id);` is checking if
 the current `pokemonInfo` object is present in the `favorite` array. It uses the `some` method to
 iterate over the `favorite` array and return `true` if at least one element in the array satisfies
 the condition `(poke.id === pokemonInfo.id)`. */
  const is_Favorite = user.favorites.some(
    (poke) => poke.pokemonId === pokemonInfo.id
  );

  return (
    <div>
      <FavoriteButton
        addToFavorites={addToFavorites}
        isFavorite={is_Favorite}
      />
    </div>
  );
};

export default FavoriteButtonHandler;
