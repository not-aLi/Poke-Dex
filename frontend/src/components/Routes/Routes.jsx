import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Favorites from "../Pages/Favorites";
import NotFound from "./NotFound";
import PokemonDataPage from "../Pages/PokemonDataPage";
import About from "../Pages/About";
import Authentication from "../User Authentication/Authentication";
import OTP from "../User Authentication/Forgot Password/OTP/OTP";
import ResetPassword from "../User Authentication/Forgot Password/Reset Password/ResetPassword";
import ProtectedRoutes from "./ProtectedRoutes";
import RedirectAuthenticatedUser from "./RedirectAuthenticatedUser";

const Routing = () => {
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
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/pokedex/pokemon/:name"
          element={
            <ProtectedRoutes>
              <PokemonDataPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoutes>
              <Favorites />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
