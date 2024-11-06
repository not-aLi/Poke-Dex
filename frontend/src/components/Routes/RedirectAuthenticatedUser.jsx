import React, { useContext } from "react";
import { PokemonContext } from "../States/StateContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate } from "react-router-dom";

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, isAuthChecking, isAuthChecked, user } =
    useContext(PokemonContext);

  if (isAuthChecking || !isAuthChecked) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (isAuthenticated && user?.isVerified && isAuthChecked) {
    return <Navigate to="/pokedex" replace />;
  }

  return children;
};

export default RedirectAuthenticatedUser;
