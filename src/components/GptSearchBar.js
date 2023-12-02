import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search in TMDB
  const searchInTMDB = async (name) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        name +
        "&include_adult=true&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };
  const handleGptSearchClick = async () => {

    const gptQuery = await fetch("https://gptsearchfunction-urldgbdo2a-uc.a.run.app", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: searchText.current.value }),
    });
    const gptResults = await gptQuery.json();

    const gptItems = gptResults.choices?.[0]?.message?.content?.split(",");

    const promiseArray = gptItems.map((item) => searchInTMDB(item));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ gptResult: gptItems, tmdbResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] flex justify-center md:p-0 md:pt-[10%]">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        ></input>
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
