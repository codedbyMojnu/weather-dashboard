export default function WeatherList({ item }) {
  const key = Object.keys(item);
  const value = Object.values(item);
  const isTemp = key[0] !== "pressure" && key[0] !== "humidity";
  return (
    <>
      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
        <span>{key[0]}</span>
        <div className="inline-flex space-x-4">
          <p>
            {isTemp ? (
              <span>{(value[0] - 273.15).toFixed(1) + "°"}</span>
            ) : (
              value[0]
            )}
          </p>
          <img src="./assets/icons/temp-max.svg" alt="temp-max" />
        </div>
      </li>
    </>
  );
}
