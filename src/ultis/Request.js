import axios from "axios";
const auth = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;

const httpRequest = axios.create({
  baseURL: url,
  headers: {
    accept: "application/json",
    Authorization: auth,
  },
});

export const request = async (kq) => {
  try {
    const response = await httpRequest.get(`/movie/${kq}`);
    return response.data.results;
  } catch (err) {
    console.error(err);
  }
};

export const search = async (kq) => {
  try {
    const response = await httpRequest.get(`/search/movie?query=${kq}`);
    return response.data.results;
  } catch (err) {
    console.error(err);
  }
};
