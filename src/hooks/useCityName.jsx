import { useEffect, useState } from "react";

export default function useCityName(searchText, setSearchText) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [cityError, setCityError] = useState("");

  useEffect(() => {
    let ignore = false;
    if (!searchText) {
      setLatitude(null); // Reset if searchText is cleared
      setLongitude(null);
      setCityError(null);
      return;
    }

    async function fetchData() {
      setCityError(null);
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=1&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        if (!response.ok) {
          console.log("Failed to fetch Area Latitude and Longitude");
        }
        const data = await response.json();
        if (!ignore && data.length > 0) {
          setLatitude(data[0].lat);
          setLongitude(data[0].lon);
        }
      } catch (error) {
        setCityError("No Co ordinates found for Your", searchText);
      }
    }

    fetchData();
    return () => (ignore = true);
  }, [searchText]);

  return { latitude, longitude, cityError };
}
