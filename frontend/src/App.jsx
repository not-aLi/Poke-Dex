import React from "react";
import PokemonProvider from "./components/States/StateContext";
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
