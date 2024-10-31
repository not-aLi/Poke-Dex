import React from "react";
import PokemonProvider from "./components/States/StateContext";
import Routes from "./components/Routes/Routes";
import FetchAllPokemon from "./components/API/FetchAllPokemon";

function App() {
  return (
    <>
      <PokemonProvider>
        <Routes />
        <FetchAllPokemon />
      </PokemonProvider>
    </>
  );
}

export default App;
