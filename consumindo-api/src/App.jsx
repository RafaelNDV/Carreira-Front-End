import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { ForecastList } from "./components/Forecast";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "./components/Loading";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState('')
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true)
      try {
        const response = await fetch(
          `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${city}`,
        );
        const data = await response.json();
        if (data.results) {
          setWeather(data.results);
          setForecast(data.results.forecast.slice(1, 4));
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      }finally{
        setLoading(false)
      }
    }

    fetchWeather();
  }, [city]);

  useEffect(() => {
    async function fetchByCoordinates(lat, lon) {
      try {
        const response = await fetch(
          `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&lat=${lat}&lon=${lon}`
        );
        const data = await response.json();
        if (data.results) {
          setWeather(data.results);
        } else {
          setError("Não foi possível obter os dados do clima.");
        }
      } catch (err) {
        setError("Erro ao buscar dados do clima." + err);
      } finally {
        setLoading(false);
      }
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchByCoordinates(latitude, longitude);
        },
        (err) => {
          setError("Permissão de localização negada." + err);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocalização não suportada pelo navegador.");
      setLoading(false);
    }
  }, []);

  return (
    <div className="app-container">
      <SearchBar onSearch={setCity} />
      {loading ? (
        <Loading/>
      ) : weather && (
        <>
          <div>
            <h1>{weather.city}</h1>
            <p>{`Nascer do sol: ${weather.sunrise} | Pôr do Sol: ${weather.sunset}`}</p>
          </div>
          <WeatherCard weather={weather} />
          <ForecastList forecast={forecast} />
        </>
      )}
    </div>
  );
}

export default App;
