import { useFavouriteArea } from "../../context";

export default function FavoriteModal() {
  const { areaNames } = useFavouriteArea();
  return (
    <div className="max-w-xs mt-[-40px] py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {areaNames?.length > 0
          ? areaNames.map((area) => (
              <li key={area?.location} className="hover:bg-gray-200">
                {area?.location}
                <button className="cursor-pointer border m-4">
                  Remove From Favorite
                </button>
              </li>
            ))
          : "No Favorites Area. Select First."}
      </ul>
    </div>
  );
}
