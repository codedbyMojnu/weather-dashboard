import { useEffect, useState } from "react";

export default function useFetchWeatherData(latitude, longitude) {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    headline: "",
    tempreture: "",
    maxTempreture: "",
    minTempreture: "",
    humidity: "",
    cloudPercentege: "",
    wind: "",
    timezone: "",
    time: "",
    sunrise: "",
    sunset: "",
    latitude: "",
    longitude: "",
  });
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
          }&units=metric`
        );
        if (!response.ok) {
          setLoading(false);
          setError("Server Problem. Failed to fetch Data");
        }
        const data = await response.json();
        if (!ignore) {
          setLoading(false);
          const exactData = {
            ...weatherData,
            location: data?.name,
            climate: data?.weather[0]?.main,
            headline: data?.weather[0]?.description,
            tempreture: data?.main?.temp,
            maxTempreture: data?.main?.temp_min,
            minTempreture: data?.main?.temp_max,
            humidity: data?.main?.humidity,
            cloudPercentege: data?.clouds?.all,
            wind: data?.wind?.speed,
            timezone: data?.timezone,
            time: data?.dt,
            sunrise: data?.sys?.sunrise,
            sunset: data?.sys?.sunset,
            latitude: latitude,
            longitude: longitude,
          };
          setWeatherData(exactData);
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
