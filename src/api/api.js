import axios from 'axios';

const API_KEY = '797306ec7cd54de5b48cd37e7c3b5dfb';

export const API = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/forecast/daily",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    lang: 'ru',
    key: API_KEY
  }
});


