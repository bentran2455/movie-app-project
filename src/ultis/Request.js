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

export const discover = async (genreId = "", page = 1) => {
  try {
    const response = await httpRequest.get(
      `/discover/movie?page=${page}&with_genres=${genreId}`
    );
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

export const genre = async () => {
  try {
    const response = await httpRequest.get("/genre/movie/list");
    return response.data.genres;
  } catch (err) {
    console.error(err);
  }
};

export const detail = async (movieId) => {
  try {
    const response = await httpRequest.get(`/movie/${movieId}`);
    console.log(response, "detail api");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const similar = async (movieId) => {
  try {
    const response = await httpRequest.get(`/movie/${movieId}/similar`);
    console.log(response);
    return response.data.results;
  } catch (err) {
    console.error(err);
  }
};
