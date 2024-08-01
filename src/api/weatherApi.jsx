import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/**
 * Obtiene los datos del clima por ciudad.
 * @param {string} city - El nombre de la ciudad.
 * @returns {Promise<Object>} Los datos del clima.
 * @throws {Error} Si hay un problema con la solicitud.
 */

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
