import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const SearchButton = ({ showSearchBar, isOpen }) => {
  return (
    <div>
      <button
        className="absolute md:static md:mr-4 right-10 top-6 hover:bg-black p-2 hover:bg-opacity-50 mr-0 hover:rounded-full transition-all z-20"
        onClick={showSearchBar}
      >
        {isOpen ? <IoMdClose className="text-white"/> : <FaSearch className="text-white" />}
      </button>
    </div>
  );
};

export default SearchButton;
