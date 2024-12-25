import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Authentication from "../User Authentication/Authentication";
import OTP from "../User Authentication/Forgot Password/OTP/OTP";
import ResetPassword from "../User Authentication/Forgot Password/Reset Password/ResetPassword";
import ProtectedRoutes from "./ProtectedRoutes";
import RedirectAuthenticatedUser from "./RedirectAuthenticatedUser";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { lazy, Suspense } from "react";
import SpinningPokeballLoader from "../helpers/SpinningPokeballLoader";

const HomePage = lazy(() => import("../Pages/HomePage"));
const PokemonDataPage = lazy(() => import("../Pages/PokemonDataPage"));
const Favorites = lazy(() => import("../Pages/Favorites"));
const About = lazy(() => import("../Pages/About"));
const GuestFavorites = lazy(() => import("../Pages/GuestFavorites"));

const Routing = ({ isGuest }) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectAuthenticatedUser>
              <Authentication />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/verifyemail"
          element={
            <RedirectAuthenticatedUser>
              <OTP />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/resetpassword/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPassword />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/pokedex"
          element={
            <ProtectedRoutes>
              <Suspense
                fallback={
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                }
              >
                <HomePage />
              </Suspense>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/pokedex/pokemon/:name"
          element={
            <ProtectedRoutes>
              <Suspense fallback={<SpinningPokeballLoader />}>
                <PokemonDataPage />
              </Suspense>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoutes>
              <Suspense fallback={<SpinningPokeballLoader />}>
                {isGuest ? <GuestFavorites /> : <Favorites />}
              </Suspense>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoutes>
              <Suspense fallback={<SpinningPokeballLoader />}>
                <About />
              </Suspense>
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
