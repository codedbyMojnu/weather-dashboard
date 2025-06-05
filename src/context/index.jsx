import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavouriteAreaContext = createContext();

export default function FavouriteAreaProvider({ children }) {
  const [areaNames, setAreaNames] = useLocalStorage("favourites", []);

  function handleAddToFavorite(latitude, longitude, location) {
    setAreaNames([
      ...areaNames,
      {
        location,
        latitude,
        longitude,
      },
    ]);
  }

  function removeFromFavorite(location) {
    setAreaNames(areaNames?.filter((area) => area.location !== location));
  }

  return (
    <FavouriteAreaContext.Provider
      value={{
        areaNames,
        setAreaNames,
        handleAddToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </FavouriteAreaContext.Provider>
  );
}

export function useFavouriteArea() {
  return useContext(FavouriteAreaContext);
}
