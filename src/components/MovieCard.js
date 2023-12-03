import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, vote_average }) => {
  if (!posterPath) {
    return null;
  }

  // Function to generate star icons based on the number of stars
  const generateStars = () => {
    const stars = Math.ceil(vote_average / 2); // Assuming vote_average is on a scale of 10
    const starIcons = [];
    const maxStars = 5; // Maximum number of stars

    for (let i = 1; i <= maxStars; i++) {
      const isYellow = i <= stars;
      starIcons.push(
        <svg
          key={i}
          className={`w-4 h-4 text-${isYellow ? "yellow" : "gray"}-300 ms-1`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }

    return starIcons;
  };

  return (
    <div className="w-36 md:w-48 pr-4 overflow-hidden hover:scale-110 transition-transform duration-300 transform cursor-pointer">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath}></img>
      <div className="flex items-center mt-2">{generateStars()}</div>
    </div>
  );
};

export default MovieCard;
