import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherSummary from "./WeatherSummary";

export default function Weather({ weatherData }) {
  const {
    location,
    climate,
    headline,
    tempreture,
    maxTempreture,
    minTempreture,
    humidity,
    cloudPercentege,
    wind,
    timezone,
    time,
    sunrise,
    sunset,
    latitude,
    longitude,
  } = weatherData;

  const favoriteData = { location, latitude, longitude };
  const weatherSummary = {
    climate,
    location,
    tempreture,
    timezone,
    time,
    sunrise,
    sunset,
  };
  const weatherCondition = {
    tempreture,
    maxTempreture,
    minTempreture,
    humidity,
    cloudPercentege,
    wind,
  };
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
                  <AddToFavourite weatherData={favoriteData} />
                </div>
              </div>
              <WeatherSummary weatherData={weatherSummary} />
              <div>
                <p className="text-sm lg:text-lg font-bold uppercase mb-8">
                  {headline}
                </p>
                <WeatherCondition weatherData={weatherCondition} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
