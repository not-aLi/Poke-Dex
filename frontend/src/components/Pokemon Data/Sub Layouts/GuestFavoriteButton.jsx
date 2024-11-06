import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const GuestFavoriteButton = ({ addToFavorites, isFavorite }) => {
  return (
    <div>
      <button className="relative z-20 mb-4 md:mb-0" onClick={addToFavorites}>
        {!isFavorite ? (
          <FaRegHeart className="text-2xl text-white hover:cursor-pointer hover:text-red-500 transition-all duration-75" />
        ) : (
          <FaHeart className="text-2xl text-red-600 hover:text-red-500 transition-all duration-75" />
        )}
      </button>
    </div>
  );
};

export default GuestFavoriteButton;