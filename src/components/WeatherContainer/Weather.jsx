import { useState } from "react";
import { getWeatherByCity } from "../../api/weatherApi";
import WeatherCard from "../WeatherCard";
import Spinner from "react-bootstrap/Spinner";

/**
 * El componente que maneja la lógica de búsqueda del clima y muestra los resultados.
 * @returns {JSX.Element} El componente de búsqueda y resultados del clima.
 */
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handleSearch maneja la búsqueda del clima por ciudad.

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      setError(null);
    } catch (err) {
      setError("Ciudad no encontrada. Por favor, inténtelo de nuevo.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Ingrese una ciudad"
      />
      <button onClick={handleSearch}>Buscar</button>
      {loading && <Spinner animation="border" variant="light" />}
      {error && <p className="error-message">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Weather;
