import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { ForecastList } from "./components/Forecast";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "./components/Loading";
import { useLocalWeather } from "./components/hooks/useLocalWather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const localWeather = useLocalWeather()

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    setLoading(localWeather.loading);
  }, [localWeather.loading]);

  useEffect(() => {
    setError(localWeather.error);
  }, [localWeather.error]);

  useEffect(() => {
    if (!localWeather.weather) {
      return;
    }

    setWeather(localWeather.weather);
    setForecast(localWeather.weather.forecast?.slice(1, 4) ?? []);
  }, [localWeather.weather]);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return (
    <div className="app-container">
      <SearchBar onSearch={setCity} />
      {loading ? (
        <Loading />
      ) : (
        weather && (
          <>
            <div>
              <h1>{weather.city}</h1>
              <p>{`Nascer do sol: ${weather.sunrise} | Pôr do Sol: ${weather.sunset}`}</p>
            </div>
            <WeatherCard weather={weather} />
            <ForecastList forecast={forecast} />
          </>
        )
      )}
    </div>
  );
}

export default App;
