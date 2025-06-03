import heart from "../../assets/heart.svg";
import { useFavouriteArea } from "../../context";

export default function AddToFavourite({area_Name}) {
  const {setAreaNames} = useFavouriteArea();
  
  return (
    <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer" onClick={() => setAreaNames((area) => [...area, area_Name])}>
      <span>Add to Favourite</span>
      <img src={heart} alt="" />
    </button>
  );
}
