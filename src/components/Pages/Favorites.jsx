import React, { useContext } from "react";
import { PokemonContext } from "../States/StateContext";
import DefaultLayout from "../Layouts/DefaultLayout";
import { Link } from "react-router-dom";
const Favorites = () => {
  const {favorite} = useContext(PokemonContext);
  return (
    <div>
      <DefaultLayout>
      <h1>This is Favorites</h1>
      <ul>{favorite.map(pokemon=><li key={pokemon.id} className="text-white"><Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link></li>)}</ul>
      </DefaultLayout>
    </div>
  );
};

export default Favorites;
