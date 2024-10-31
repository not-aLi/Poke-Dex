import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Favorites from "../Pages/Favorites";
import NotFound from "./NotFound";
import PokemonDataPage from "../Pages/PokemonDataPage";
import About from "../Pages/About";
import Authentication from "../User Authentication/Authentication";
import OTP from "../User Authentication/Reset Password/OTP/OTP";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OTP/>}/>
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/pokemon/:name" element={<PokemonDataPage/>}/>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
