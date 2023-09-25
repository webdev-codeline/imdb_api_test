import { API_KEY, API_URL } from "../constants/config";

export const getTopMovies = async () => {
  try {
    const url = `${API_URL}/Top250Movies/${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data?.items;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getRandomMovie = async () => {
  try {
    const movies = await getTopMovies();
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getMovie = async (id) => {
  try {
    const url = `${API_URL}/Title/${API_KEY}/${id}/Trailer,`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
