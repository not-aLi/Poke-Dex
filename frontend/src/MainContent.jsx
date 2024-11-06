import React, { useContext, useEffect } from "react";
import { PokemonContext } from "./components/States/StateContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Toaster } from "sonner";
import FetchAllPokemon from "./components/API/FetchAllPokemon";
import Routes from "./components/Routes/Routes";
const MainContent = () => {
  const { isAuthChecking, isAuthChecked, checkAuth, isGuest } =
    useContext(PokemonContext);

  isGuest
    ? null
    : useEffect(() => {
        checkAuth();
      }, []);
  return (
    <>
      {isAuthChecking && !isAuthChecked ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <Toaster richColors position="top-left" expand={true} />
          <Routes isGuest={isGuest} />
          <FetchAllPokemon />
        </>
      )}
    </>
  );
};

export default MainContent;
