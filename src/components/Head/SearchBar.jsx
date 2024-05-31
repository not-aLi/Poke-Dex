import React from "react";

export default function SearchBar() {
  return (
    <div>
      <div className=" md:flex items-center">
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
  );
}
