import React from "react";
import PokemonProvider from "./components/States/StateContext";
import Routes from "./components/Routes/Routes";
function App() {
  return (
    <>
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </>
  );
}

export default App;
