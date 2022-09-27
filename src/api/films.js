import axios from "axios";

const API = "http://localhost:4000";

export const getFilms = async () => {
  const { data } = await axios(`${API}/films`);
  return data;
};
export const getPFilms = async (page = 1, limit = 10) => {
  const { data } = await axios(`${API}/films?_page=${page}&_limit=${limit}`);
  return data;
};
export const addFilm = async (film) => {
  const { data } = await axios.post(`${API}/films`, film);
  return data;
};
