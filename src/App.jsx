import { useState } from "react";
import Header from "./components/header/Header";
import Weather from "./components/weather/Weather";
import FavouriteAreaProvider from "./context";
import useCityName from "./hooks/useCityName";
import useCurrentLocation from "./hooks/useCurrentLocation";
import useFetchWeatherData from "./hooks/useFetchWeatherData";

export default function App() {
  const [searchText, setSearchText] = useState("");

  function handleAreaSearch(area) {
    if (area.trim().length > 3) {
      setSearchText(area);
    }
  }

  // There is Two type when fetching Condition
  const currentLocation = useCurrentLocation();
  const cityName = useCityName(searchText);

  const latitude = searchText ? cityName.latitude : currentLocation.latitude;
  const longitude = searchText ? cityName.longitude : currentLocation.longitude;

  const { weatherData, loading, error } = useFetchWeatherData(
    latitude,
    longitude
  );

  return (
    <FavouriteAreaProvider>
      <Header onSearch={handleAreaSearch} />
      <div className="text-center">
        {/* Loading state handle */}
        {!weatherData?.base && !error && loading ? <div>Loading...</div> : null}
        {/* Error state handle */}
        {!weatherData?.base && error && !loading ? <div>{error}</div> : null}
        {!cityName.cityError && <div>{cityName?.cityError}</div>}
      </div>
      {!error && !loading ? <Weather weatherData={weatherData} /> : null}
    </FavouriteAreaProvider>
  );
}
