import Navbar from "../NavBar";
import Weather from "./Weather";
/**
 * Componente principal que renderiza el Navbar y el componente Weather.
 * @returns {JSX.Element} El contenedor de la aplicación del clima.
 */
const WeatherContainer = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Weather />
      </div>
    </div>
  );
};

export default WeatherContainer;
