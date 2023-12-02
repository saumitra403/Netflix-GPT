export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWU3NGE4NjZjMjEzMzUxYjA1ODM3YWE5NTUxZjlmMCIsInN1YiI6IjY1NWEyOTJkZWE4NGM3MTA5MjJhMDEyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aX58yK4HV37zF10OjvWj-NS92b8MIzST5Sc0wHGikrs",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifer: "en", name: "English" },
  { identifer: "hindi", name: "Hindi" },
  { identifer: "spanish", name: "Spanish" },
];


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY