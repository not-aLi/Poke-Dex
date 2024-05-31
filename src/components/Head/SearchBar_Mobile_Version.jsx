import React from "react";
import { IoSearchCircle } from "react-icons/io5";
const SearchBar_Mobile_Version = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-10 bg-black bg-opacity-75 backdrop-blur-md">
      <div className="relative flex shrink bg-black p-2 rounded-lg backdrop-blur-3xl">
        <input
          type="text"
          placeholder="Search"
          className="rounded-lg w-60 md:w-80 focus:outline-none p-2 "
          autoFocus
        />
        <button className="ml-2 text-white fixed right-3">
          <IoSearchCircle className="text-black w-10 h-10" />
        </button>
      </div>
      .
    </div>
  );
};

export default SearchBar_Mobile_Version;
