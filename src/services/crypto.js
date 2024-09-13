import axios from "axios";
const options = {
  headers: {
    "x-rapidapi-key": process.env.rapidKey,
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
