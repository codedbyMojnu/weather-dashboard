import AddToFavourite from "./AddToFavourite";
import Location from "./Location";
import WeatherList from "./WeatherList";

export default function Weather({ weatherData }) {
  const weatherMainData = [];
  for (let key in weatherData?.main) {
    if (weatherMainData?.length < 6) {
      weatherMainData.push({ [key]: weatherData?.main[key] });
    }
  }

  console.log(weatherData);
  return (
    <main>
      <section>
        <div className="container mx-auto">
          <div
            className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 max-w-[1058px] mx-auto"
            style={{ transform: "scale(0.8)" }}
          >
            <div className="grid md:grid-cols-2 gap-10 md:gap-6">
              <div className="md:col-span-2">
                <div className="flex items-center justify-end space-x-6">
                  <AddToFavourite area_Name={weatherData?.name} />
                </div>
              </div>
              <Location weatherData={weatherData} />
              <div>
                <p className="text-sm lg:text-lg font-bold uppercase mb-8">
                  {weatherData?.weather[0]?.description}
                </p>
                <ul className="space-y-6 lg:space-y-6">
                  {weatherMainData?.map((item, index) => (
                    <WeatherList key={index} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
