import axios from "axios";
const optionsForAllCoins = {
  headers: {
    // "x-rapidapi-key": import.meta.env.VITE_RAPID_KEY,
    // "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "608b6a9ea5msh4904afe7849d311p1a13dbjsnd7e7e33a2d34",
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  },
};

export const getAllCoinsData = (onSuccess, onFailure) => {
  const url = "https://coinranking1.p.rapidapi.com/coins/";
  axios
    .get(url, optionsForAllCoins)
    .then((resp) => onSuccess(resp))
    .catch((error) => onFailure(error));
};

const optionForNews = {
  params: {
    q: "Technology", // Your search term
    count: "10", // Limit the number of results
    freshness: "Day", // Freshness filter
    textFormat: "Raw", // Optional but recommended to specify format
    safeSearch: "Off", // Optional safe search filter
  },
  headers: {
    "x-rapidapi-key": "608b6a9ea5msh4904afe7849d311p1a13dbjsnd7e7e33a2d34",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "X-BingApis-SDK": "true",
  },
};

export const getAllNewsData = (onSuccess, onFailure) => {
  const url = "https://bing-news-search1.p.rapidapi.com/news";
  axios
    .get(url, optionForNews)
    .then((resp) => onSuccess(resp))
    .catch((error) => onFailure(error));
};
