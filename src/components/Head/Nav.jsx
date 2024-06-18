import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul className="md:bg-transparent md:space-y-0 md:px-0 md:h-auto md:static md:flex md:items-center md:justify-center md:space-x-20 text-white text-xl bg-gray-700 h-36 space-y-5 px-2">
        <li className="w-20 cursor-pointer hover:border-b-2 border-gray-300 transition-all duration-75">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-gray-300 text-gray-300"
                : undefined
            }
          >
            Pokedex
          </NavLink>
        </li>
        <li className="w-20 cursor-pointer hover:border-b-2 border-gray-300 transition-all duration-75">
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-gray-300 text-gray-300"
                : undefined
            }
          >
            Favorites
          </NavLink>
        </li>
        <li className="w-16 cursor-pointer hover:border-b-2 border-gray-300 transition-all duration-75">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-gray-300 text-gray-300"
                : undefined
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
