import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import React from "react";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="logo"
        ></img>
      </div>
    <div className="">
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
    </>
  );
};

export default GptSearch;
