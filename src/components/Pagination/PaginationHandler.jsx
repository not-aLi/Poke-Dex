import React from "react";
import Pagination from "./PaginationLayout";

const PaginationHandler = ({
  setUrl,
  nextUrl,
  previousUrl,
  updateDisplayedPokemonCount,
  loading,
}) => {
  const previousButton = () => {
    setUrl(previousUrl);
    updateDisplayedPokemonCount("decrement");
  };
  const nextButton = () => {
    setUrl(nextUrl);
    updateDisplayedPokemonCount("increment");
  };

  return (
    <div>
      <Pagination
        previousButton={previousUrl ? previousButton : null}
        nextButton={nextUrl ? nextButton : null}
        loading={loading}
      />
    </div>
  );
};

export default PaginationHandler;
