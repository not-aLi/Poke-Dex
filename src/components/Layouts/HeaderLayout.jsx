import React from "react";
import Header from "../Head/Header";
import FetchAllPokemon from "../Fetch Data from API/FetchAllPokemon";
const HeaderLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <FetchAllPokemon />
      {children}
    </div>
  );
};

export default DefaultLayout;
