import { useEffect } from "react";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const useLocalWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchByCoordinates(lat, lon) {
      try {
        const response = await fetch(
          `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&lat=${lat}&lon=${lon}`,
        );
        const data = await response.json();

        if (data.results) {
          setWeather(data.results);
          setError(null);
        } else {
          setError("Nao foi possivel obter os dados do clima.");
        }
      } catch (err) {
        setError("Erro ao buscar dados do clima. " + err.message);
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
          setError("Permissao de localizacao negada. " + err.message);
          setLoading(false);
        },
      );
    } else {
      setError("Geolocalizacao nao suportada pelo navegador.");
      setLoading(false);
    }
  }, []);

  return { weather, error, loading };
};
