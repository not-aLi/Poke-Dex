import React from "react";
import getTypeStyles from "./getTypeStyles";
import Moves from "../Sub Layouts/Moves";

const MovesHandler = () => {
  const renderColor = (type) => {
    if (type) {
      return getTypeStyles(type);
    }
    return {};
  };
  return (
    <div>
      <Moves renderColor={renderColor} />
    </div>
  );
};

export default MovesHandler;
