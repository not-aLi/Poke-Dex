import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import Favorites from "../Favorites";
import NotFound from "./NotFound";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
