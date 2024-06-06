import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <ul className="md:bg-transparent md:space-y-0 md:px-0 md:h-auto md:static md:flex md:items-center md:justify-center md:space-x-20 text-white text-xl bg-gray-700 h-36 space-y-5 px-2 ">
        <li className="w-20 cursor-pointer hover:border-b-2 border-gray-300 transition-all duration-75">
          <NavLink exact to="/" className="nav-link" activeClassName="text-yellow-500">Pokedex</NavLink>
        </li>
        <li className="w-20 cursor-pointer hover:border-b-2 border-gray-300 transition-all duration-75">
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li className="w-16 cursor-pointer hover:border-b-2 border-gray-300 transition-all duration-75">
          About
        </li>
      </ul>
    </div>
  );
}
