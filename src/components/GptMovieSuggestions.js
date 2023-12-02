import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptResult, tmdbResults } = useSelector((store) => store.gpt);

  if (!gptResult) {
    return null;
  }
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {gptResult.map((itemName, index) => (
          <MovieList
            key={itemName}
            title={itemName}
            movies={tmdbResults[index]}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
