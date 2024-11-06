import React from "react";
import PokemonProvider from "./components/States/StateContext";
import Routes from "./components/Routes/Routes";
import FetchAllPokemon from "./components/API/FetchAllPokemon";
import { Toaster, toast } from 'sonner'
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <PokemonProvider>
       <MainContent/>
      </PokemonProvider>
    </>
  );
}

export default App;
