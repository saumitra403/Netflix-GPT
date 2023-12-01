import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import React from "react";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="logo"
        ></img>
      </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  );
};

export default GptSearch;
