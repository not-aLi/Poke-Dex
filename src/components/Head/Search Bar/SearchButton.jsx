import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchButton = ({ showSearchBar }) => {
  return (
    <div>
      <button
        className="absolute md:static md:mr-8 right-10 top-6 hover:bg-black p-2 hover:bg-opacity-50 mr-0 hover:rounded-full transition-all z-50"
        onClick={showSearchBar}
      >
        <FaSearch className="text-white" />
      </button>
    </div>
  );
};

export default SearchButton;
