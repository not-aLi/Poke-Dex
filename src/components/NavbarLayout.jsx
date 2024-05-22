import React from "react";
import { SiPokemon } from "react-icons/si";
import { CgPokemon } from "react-icons/cg";
export default function NavbarLayout() {
  return (
    <nav className="bg-gray-800 shadow-lg p-2">
      <div className="flex mx-auto justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <SiPokemon className="text-yellow-500 w-28 h-20 " />
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white text-xl">
          <li className="cursor-pointer hover:text-gray-300 transition-all">
            Pokedex
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition-all">
            Favorites
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition-all">
            About
          </li>
        </ul>
        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-l-md border-2 border-gray-300 focus:outline-none"
          />
          <button className="bg-orange-500 text-white p-2 rounded-r-md border-l-0 border-2 border-orange-500 hover:bg-orange-600 hover:border-orange-600 transition-all">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
