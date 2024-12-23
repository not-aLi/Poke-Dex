import Pagination from "../Layouts/PaginationLayout";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";

const PaginationHandler = ({
  setUrl,
  nextUrl,
  previousUrl,
  updateDisplayedPokemonCount,
  loading,
}) => {
  const queryClient = useQueryClient();

  
  useEffect(() => {
    if (nextUrl) {
      queryClient.prefetchQuery({queryKey:["Pokemon", nextUrl], queryFn:() => fetchPokemon(nextUrl)});
    }
    if (previousUrl) {
      queryClient.prefetchQuery({queryKey:["Pokemon", previousUrl], queryFn:() => fetchPokemon(previousUrl)});
    }
  }, [nextUrl, previousUrl, queryClient]);

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
