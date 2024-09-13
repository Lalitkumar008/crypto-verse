import axios from "axios";
const options = {
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
    .get(url, options)
    .then((resp) => onSuccess(resp))
    .catch((error) => onFailure(error));
};
