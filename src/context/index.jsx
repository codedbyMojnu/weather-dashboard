import { createContext, useContext, useState } from "react";

const FavouriteAreaContext = createContext();

export default function FavouriteAreaProvider({ children }) {
  const [areaNames, setAreaNames] = useState([]);

  return (
    <FavouriteAreaContext.Provider value={{ areaNames, setAreaNames }}>
      {children}
    </FavouriteAreaContext.Provider>
  );
}

export function useFavouriteArea() {
  return useContext(FavouriteAreaContext);
}
