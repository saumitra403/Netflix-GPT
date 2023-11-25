import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 overflow-hidden hover:scale-110 transition-transform duration-300 transform cursor-pointer">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
