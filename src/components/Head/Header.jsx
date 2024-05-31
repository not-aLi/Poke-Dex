import React, { useState } from "react";
import { TbPokeball, TbPokeballOff } from "react-icons/tb";
import Logo from "./Logo";
import Nav from "./Nav";
import SearchButton from "./SearchButton";
export default function Header({ loading, toggleSearch, search }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-gray-800 shadow-lg p-0">
      {!loading ? (
        <div className="flex flex-col md:flex-row md:mx-auto md:justify-between md:items-center">
          <button className="absolute top-7 left-2 md:hidden" onClick={toggle}>
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
          {/* Search Bar */}
          <div className="z-20">
            <SearchButton showSearchBar={toggleSearch} isOpen={search} />
          </div>
        </div>
      ) : null}
    </nav>
  );
}
