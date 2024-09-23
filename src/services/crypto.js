import axios from "axios";
// const rapidApiKey = import.meta.env.VITE_RAPID_KEY;
const rapidApiKey = "608b6a9ea5msh4904afe7849d311p1a13dbjsnd7e7e33a2d34";
const rapidApiHost = "coinranking1.p.rapidapi.com";
// all coins DATA
const optionsForAllCoins = {
  headers: {
    "x-rapidapi-key": rapidApiKey,
    "x-rapidapi-host": rapidApiHost,
  },
};

export const getAllCoinsData = (onSuccess, onFailure) => {
  const url = "https://coinranking1.p.rapidapi.com/coins/";
  axios
    .get(url, optionsForAllCoins)
    .then((resp) => onSuccess(resp))
    .catch((error) => onFailure(error));
};
// get single coin data by id
const optionsForSingleCoin = {
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
  },
  headers: {
    "x-rapidapi-key": rapidApiKey,
    "x-rapidapi-host": rapidApiHost,
  },
};
export const getCoinDataById = (onSuccess, onFailure, coinId) => {
  const url = `https://coinranking1.p.rapidapi.com/coin/${coinId}`;
  axios
    .get(url, optionsForSingleCoin)
    .then((resp) => onSuccess(resp))
    .catch((error) => onFailure(error));
};

export const getCoinPriceHistory = (
  onSuccess,
  onFailure,
  coinId,
  timePeriod
) => {
  const url = `https://coinranking1.p.rapidapi.com/coin/${coinId}/history`;
  axios
    .get(url, {
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: timePeriod,
      },
      headers: {
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": rapidApiHost,
      },
    })
    .then((resp) => onSuccess(resp))
    .catch((error) => onFailure(error));
};

// exhchages data
export const getExchangeData = (onSuccess, onFailure) => {
  const url = `https://coingecko.p.rapidapi.com/exchanges`;
  axios
    .get(url, {
      headers: {
        "x-rapidapi-key": "608b6a9ea5msh4904afe7849d311p1a13dbjsnd7e7e33a2d34",
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        // "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
      },
    })
    .then((resp) => onSuccess(resp))
    .catch((error) => onFailure(error));
};

// get news data

export const getAllNewsData = (onSuccess, onFailure) => {
  const url = "https://google-news13.p.rapidapi.com/search";
  axios
    .get(url, {
      params: {
        keyword: "crypto-currencies",
        lr: "en-US",
      },
      headers: {
        "x-rapidapi-key": "608b6a9ea5msh4904afe7849d311p1a13dbjsnd7e7e33a2d34",
        "x-rapidapi-host": "google-news13.p.rapidapi.com",
      },
    })
    .then((resp) => onSuccess(resp))
    .catch((error) => onFailure(error));
};
