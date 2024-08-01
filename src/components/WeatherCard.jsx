import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

/**
 * Componente que muestra los detalles del clima.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.weather - Los datos del clima.
 * @returns {JSX.Element} El componente que muestra los detalles del clima.
 */
const WeatherCard = ({ weather }) => {
  return (
    <Card className="text-center weather-card">
      <Card.Header>
        {weather.name}, {weather.sys.country}
      </Card.Header>
      <Card.Body>
        <Card.Title>{weather.weather[0].description}</Card.Title>
        <Card.Text>
          <p>Temperatura: {weather.main.temp} °C</p>
          <p>Humedad: {weather.main.humidity} %</p>
          <p>Presión: {weather.main.pressure} hPa</p>
          <p>Visibilidad: {weather.visibility} metros</p>
          <p>Velocidad del viento: {weather.wind.speed} m/s</p>
          <p>Dirección del viento: {weather.wind.deg}°</p>
        </Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        Actualizado hace un momento
      </Card.Footer>
    </Card>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
    }).isRequired,
    visibility: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      deg: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherCard;
