import React, { useContext } from "react";
import { IoCloseCircle } from "react-icons/io5";
import ImageLoader from "../helpers/ImageLoader";
import { Link } from "react-router-dom";

const SearchBar_Mobile_Version = ({
  handleSearch,
  searchInput,
  filteredSearch,
  highlightSearchResult,
  toggleSearch,
  handleCloseSearchBar,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-30 bg-black bg-opacity-75 backdrop-blur-md">
      <div className="relative flex shrink bg-black p-2 rounded-lg backdrop-blur-3xl">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearch}
          className="rounded-lg w-60 md:w-80 focus:outline-none p-2 "
          autoFocus
        />
        {searchInput && (
          <div className="absolute top-full left-0 mt-2 w-full bg-gray-800 bg-opacity-90 rounded-lg shadow-lg max-h-60 overflow-y-auto z-20">
            {filteredSearch.length === 0 ? (
              <div className="p-4 text-white text-center text-md">
                No results found
              </div>
            ) : (
              filteredSearch.map((poke, index) => (
                <div key={index} onClick={handleCloseSearchBar}>
                  <Link
                    to={`/pokemon/${poke.name}`}
                    className="flex justify-between items-center p-4 px-2 my-2 hover:bg-gray-700 cursor-pointer"
                  >
                    <p className=" text-slate-200 tracking-wide">
                      {highlightSearchResult(poke.name)}
                    </p>

                    <span className="h-12 w-12 text-center text-xs text-white">
                      <ImageLoader
                        src={poke.sprites.front_default}
                        alt={poke.name}
                        Height={30}
                        Width={30}
                      />
                    </span>
                  </Link>
                </div>
              ))
            )}
          </div>
        )}
        <button
          className="ml-2 text-white fixed right-3 text-center my-2 md:my-0"
          onClick={toggleSearch}
        >
          <IoCloseCircle className="text-black  w-6 h-6 md:w-10 md:h-10 hover:text-red-700" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar_Mobile_Version;
