import axios from "axios";

export const getFilms = async () => {
  const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/films`);
  return data;
};
export const getPFilms = async (page = 1, limit = 10) => {
  const { data } = await axios(
    `${import.meta.env.VITE_BACKEND_URL}/films?_page=${page}&_limit=${limit}`
  );
  return data;
};
export const addFilm = async (film) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/films`,
    film
  );
  return data;
};
