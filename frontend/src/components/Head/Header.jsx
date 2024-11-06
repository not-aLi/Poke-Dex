import React, { useContext, useState } from "react";
import { TbPokeball, TbPokeballOff } from "react-icons/tb";
import Logo from "./Logo";
import Nav from "./Nav";
import SearchButton from "./Search Bar/SearchButton";
import { PokemonContext } from "../States/StateContext";
import snorlax from "../../assets/snorlax.png";
import pikachu from "../../assets/pikachuGuestAvatar.png";

export default function Header() {
  const {
    loading,
    setSearchBarVisibility,
    searchBarVisibility,
    setSearchInput,
    isGuest,
    isLogoutOpen,
    setLogoutOpen,
  } = useContext(PokemonContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const avatarToggle = () => {
    setLogoutOpen(!isLogoutOpen);
  };

  /**
   * The function `toggleSearch` toggles the visibility of a search bar and clears the search input.
   */
  const toggleSearch = () => {
    setSearchBarVisibility(!searchBarVisibility);
    setSearchInput("");
  };

  return (
    <div className="sticky top-0 z-30 overflow-hidden">
      <nav className=" bg-gray-800 shadow-xl p-0 w-screen ">
        {!loading ? (
          <div className="flex flex-col md:flex-row md:mx-auto md:justify-between md:items-center">
            <button
              className="absolute top-7 left-2 md:hidden"
              onClick={toggle}
            >
              {isOpen ? (
                <TbPokeballOff className="text-white w-5 h-5" />
              ) : (
                <TbPokeball className="text-white w-5 h-5" />
              )}
            </button>

            {/* Logo */}
            <Logo />

            {/* Navigation Links */}
            <div
              className={`md:block transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } md:max-h-none md:opacity-100`}
            >
              <Nav />
            </div>

            {/* Search Bar and User Avatar*/}
            <div className="flex items-center justify-center">
              {/* Search Bar */}
              <div className="z-30">
                <SearchButton showSearchBar={toggleSearch} />
              </div>

              {/* User Avatar */}
              <button
                onClick={avatarToggle}
                className={`hidden md:flex mr-10 hover:bg-opacity-75 hover:rounded-full hover:transition-all hover:bg-white ${isGuest?"p-2":"p-1"} justify-center items-center`}
              >
                {isGuest ? (
                  <img src={pikachu} alt="pikachu" className="size-8" />
                ) : (
                  <img src={snorlax} alt="snorlax" className="size-8" />
                )}
              </button>
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
}
