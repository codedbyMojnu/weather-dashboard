import { useEffect, useState } from "react";

export default function useFetchWeatherData(latitude, longitude) {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (latitude === null || longitude === null) {
      return;
    }
    let ignore = false;
    async function fetchWeatherData() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        if (!response.ok) {
          setLoading(false);
          setError("Server Problem. Failed to fetch Data");
        }
        const data = await response.json();
        if (!ignore) {
          setLoading(false);
          setWeatherData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchWeatherData();

    return () => (ignore = true);
  }, [latitude, longitude]);

  return { weatherData, loading, error };
}
