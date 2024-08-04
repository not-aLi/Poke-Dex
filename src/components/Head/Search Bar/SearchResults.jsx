import React, { useContext } from "react";
import SearchBar from "../../Layouts/SearchBarLayout";
import { PokemonContext } from "../../States/StateContext";

const SearchResults = () => {
  const {
    setSearchInput,
    setFilteredSearch,
    allPokemons,
    searchInput,
    filteredSearch,
    setSearchBarVisibility,
    searchBarVisibility,
  } = useContext(PokemonContext);
  /**
   * The handleSearch function filters a list of Pokemon based on a search input value and updates the
   * filtered search results.
   */
  const handleSearch = (e) => {
    try {
      const searchValue = e.target.value.toLowerCase();
      setSearchInput(searchValue);
  
      const filteredData = (allPokemons || []).filter((poke) => {
        if (!poke.name) {
          console.warn('Undefined name:', poke);
          return false;
        }
        return poke.name.toLowerCase().includes(searchValue);
      });
  
      setFilteredSearch(filteredData);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };
  

  /**
   * The function `clearInput` clears the search input by setting it to an empty string.
   */
  const clearInput = () => {
    setSearchInput("");
  };

  /**
   * The function `handleCloseSearchBar` sets the search bar visibility to false and clears the input.
   */
  const handleCloseSearchBar = () => {
    setSearchBarVisibility(false);
    clearInput();
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
        handleCloseSearchBar={handleCloseSearchBar}
      />
    </div>
  );
};

export default SearchResults;
