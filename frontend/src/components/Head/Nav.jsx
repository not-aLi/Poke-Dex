import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PokemonContext } from "../States/StateContext";
import snorlax from "../../assets/snorlax.png";
import normal from "../../assets/farfetch.gif";
import fire from "../../assets/scorbunny.gif";
import pikachu from "../../assets/pikachuGuestAvatar.png";
import Button from "../User Authentication/Button";
import Loader from "../User Authentication/Loader";
import { toast } from "sonner";

export default function Nav() {
  const { isGuest, user, authLoading, logout } = useContext(PokemonContext);
  const navigate = useNavigate();

  const handleLogout = async()=>{
    try {
      const response = await logout();
      toast.success(response?.data?.message || "Logout successfully");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <ul className=" bg-gradient-to-b from-gray-800 to-gray-950 md:bg-gradient-to-b md:from-gray-800 md:to-gray-800 md:space-y-0 md:px-0 md:h-auto md:static md:flex md:items-center md:justify-center md:space-x-20 text-white text-lg md:text-xl space-y-3 px-2">
        <li className="w-20 cursor-pointer transition-all duration-75">
          <NavLink
            to="/pokedex"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-gray-100 text-gray-300"
                : "hover:border-b-2 hover:border-gray-200"
            }
          >
            Pokedex
          </NavLink>
        </li>
        <li className="w-20 cursor-pointer transition-all duration-75">
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-gray-100 text-gray-300"
                : "hover:border-b-2 hover:border-gray-200"
            }
          >
            Favorites
          </NavLink>
        </li>
        <li className="w-16 cursor-pointer transition-all duration-75">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-gray-100 text-gray-300"
                : "hover:border-b-2 hover:border-gray-200"
            }
          >
            About
          </NavLink>
        </li>
        {/* Logout and name */}
        <div className="flex items-center justify-center md:hidden w-full space-x-4">
          {/* Avatar */}
          <img
            src={isGuest ? pikachu : snorlax}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />

          {/* Logout Button - Centered, dynamic width */}
          {authLoading ? (
            <div className="flex-1 mx-4">
              <Button
                loading={<Loader img={fire} />}
                color={"normal"}
                img={normal}
              />
            </div>
          ) : (
            <button disabled={isGuest} onClick={handleLogout} className="flex-1 mx-4">
              <Button text={"Logout"} color={"normal"} img={normal} />
            </button>
          )}

          {/* Username */}
          <span className="text-white text-base font-medium whitespace-nowrap">
            {user.name}
          </span>
        </div>
      </ul>
    </div>
  );
}
