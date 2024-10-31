import React from 'react'

const getTypeStyles = (type) => {
    if (type === "normal") {
      return {
        backgroundColor: "#6D6D4E",
        color: "#FFFFFF",
        borderColor: "#6D6D4E",
      };
    } else if (type === "fire") {
      return {
        backgroundColor: "#B52A00",
        color: "#FFFFFF",
        borderColor: "#B52A00",
      };
    } else if (type === "water") {
      return {
        backgroundColor: "#3854A4",
        color: "#FFFFFF",
        borderColor: "#3854A4",
      };
    } else if (type === "electric") {
      return {
        backgroundColor: "#B8A200",
        color: "#FFFFFF",
        borderColor: "#B8A200",
      };
    } else if (type === "grass") {
      return {
        backgroundColor: "#4A8530",
        color: "#FFFFFF",
        borderColor: "#4A8530",
      };
    } else if (type === "ice") {
      return {
        backgroundColor: "#62A2A2",
        color: "#FFFFFF",
        borderColor: "#62A2A2",
      };
    } else if (type === "fighting") {
      return {
        backgroundColor: "#891919",
        color: "#FFFFFF",
        borderColor: "#891919",
      };
    } else if (type === "poison") {
      return {
        backgroundColor: "#682A68",
        color: "#FFFFFF",
        borderColor: "#682A68",
      };
    } else if (type === "ground") {
      return {
        backgroundColor: "#A38734",
        color: "#FFFFFF",
        borderColor: "#A38734",
      };
    } else if (type === "flying") {
      return {
        backgroundColor: "#726DA8",
        color: "#FFFFFF",
        borderColor: "#726DA8",
      };
    } else if (type === "psychic") {
      return {
        backgroundColor: "#C11C58",
        color: "#FFFFFF",
        borderColor: "#C11C58",
      };
    } else if (type === "bug") {
      return {
        backgroundColor: "#727A1D",
        color: "#FFFFFF",
        borderColor: "#727A1D",
      };
    } else if (type === "rock") {
      return {
        backgroundColor: "#85702A",
        color: "#FFFFFF",
        borderColor: "#85702A",
      };
    } else if (type === "ghost") {
      return {
        backgroundColor: "#4A3E6F",
        color: "#FFFFFF",
        borderColor: "#4A3E6F",
      };
    } else if (type === "dragon") {
      return {
        backgroundColor: "#4A1BA8",
        color: "#FFFFFF",
        borderColor: "#4A1BA8",
      };
    } else if (type === "dark") {
      return {
        backgroundColor: "#4A3932",
        color: "#FFFFFF",
        borderColor: "#4A3932",
      };
    } else if (type === "steel") {
      return {
        backgroundColor: "#6A6A82",
        color: "#FFFFFF",
        borderColor: "#6A6A82",
      };
    } else if (type === "fairy") {
      return {
        backgroundColor: "#B27181",
        color: "#FFFFFF",
        borderColor: "#B27181",
      };
    } else {
      return { backgroundColor: "#FFFFFF", color: "#000000" };
    }
  };

export default getTypeStyles;
