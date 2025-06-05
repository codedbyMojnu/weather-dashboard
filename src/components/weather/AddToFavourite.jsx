import { useEffect } from "react";
import heart from "../../assets/heart.svg";
import { useFavouriteArea } from "../../context";

const LOCAL_KEY = "areas";

export default function AddToFavourite({ weatherData }) {
  const { areas, setAreaNames } = useFavouriteArea();
  const { location, latitude, longitude } = weatherData;

  return (
    <button
      className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer"
      onClick={() =>
        setAreaNames((area) => [
          ...area,
          {
            location,
            latitude,
            longitude,
          },
        ])
      }
    >
      <span>Add to Favourite</span>
      <img src={heart} alt="" />
    </button>
  );
}
