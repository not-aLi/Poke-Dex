import React from "react";

const CapitilizeFirstLetter = ( string ) => {
  return string.charAt(0).toUpperCase() + string.substring(1);
};

export default CapitilizeFirstLetter;
