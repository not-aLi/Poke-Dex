import React from "react";
import SearchBar from "./SearchBarLayout";
import CapitilizeFirstLetter from "../../helpers/CapitilizeFirstLetter";
const SearchResults = ({
  setSearchInput,
  setFilteredSearch,
  allPokemons,
  searchInput,
  filteredSearch,
  setSearchBarVisibility,
  searchBarVisibility
}) => {
  /**
   * The handleSearch function filters a list of Pokemon based on a search input value and updates the
   * filtered search results.
   */
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchInput(searchValue);
    const filteredData = allPokemons.filter((poke) =>
      poke.name.toLowerCase().includes(searchValue)
    );
    setFilteredSearch(filteredData);
  };

  /**
   * The function `clearInput` clears the search input by setting it to an empty string.
   */
  const clearInput = () => {
    setSearchInput("");
  };

  /* The `highlightSearchResult` function is responsible for highlighting the search input within the
search results. Here's a breakdown of what it does: */
  const highlightSearchResult = (result) => {
    if (!searchInput) {
      return result;
    }
    const parts = result.split(new RegExp(`(${searchInput})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part === searchInput ? (
            <b className="text-md text-white" key={index}>
              {part}
            </b>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  /**
   * The function `toggleSearch` toggles the visibility of a search bar and clears the search input.
   */
  const toggleSearch = () => {
    setSearchBarVisibility(!searchBarVisibility);
    clearInput();
  };
  return (
    <div>
      <SearchBar
        handleSearch={handleSearch}
        searchInput={searchInput}
        filteredSearch={filteredSearch}
        clearInput={clearInput}
        highlightSearchResult={highlightSearchResult}
        toggleSearch={toggleSearch}
      />
    </div>
  );
};

export default SearchResults;
