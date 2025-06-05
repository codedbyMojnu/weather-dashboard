import getImage from "./../../utils/getImage";
export default function WeatherCondition({ weatherData }) {
  return (
    <>
      {Object.entries(weatherData).map(([key, value]) => {
        const data = getImage(key, value);

        if (!data.title) return null;
        return (
          <li
            key={key}
            className="text-sm lg:text-lg flex items-center justify-between space-x-4"
          >
            <span>{data?.title}</span>
            <div className="inline-flex space-x-4">
              <p>{data?.value}</p>
              <img src={data?.img} alt="temp-max" />
            </div>
          </li>
        );
      })}
    </>
  );
}
