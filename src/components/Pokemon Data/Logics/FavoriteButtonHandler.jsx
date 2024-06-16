import React, { useContext } from "react";
import { PokemonContext } from "../../States/StateContext";
import FavoriteButton from "../Sub Layouts/FavoriteButton";

const FavoriteButtonHandler = () => {
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
    } else {
      setFavorite(favorite.filter((poke) => poke.id !== pokemon.id));
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
      <FavoriteButton
        addToFavorites={() => addToFavorites(pokemonInfo)}
        isFavorite={is_Favorite}
      />
    </div>
  );
};

export default FavoriteButtonHandler;
