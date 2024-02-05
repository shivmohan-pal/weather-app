import UnitToggle from "./UnitToggle";
import useWeather from "../_context/weatherContext";
import { FtoC, UNIX_to_Timestamp, timeStampToDate } from "../_helpers/math";
import { useState } from "react";
import { convertDataUnit, weatherIcon } from "../_helpers/fetch";
import TimeCard from "./TimeCard";

const Dashboard = () => {
  const { weather } = useWeather();
  const [unit, setUnit] = useState("Fahrenheit");

  console.log(weather);

  if (weather) {
    if (weather.list) {
      const list =
        unit[0] === "F"
          ? weather.list
          : weather.list.map((item) => {
              return { ...item, temps: convertDataUnit(FtoC, item.temps) };
            });
      const differentTimeWeather = list.slice(0, 10).filter((item) => {
        const theDate = new Date(UNIX_to_Timestamp(list[0].dt)).getDate();
        const itemDate = new Date(UNIX_to_Timestamp(item.dt)).getDate();
        return itemDate === theDate;
      });
      console.log(differentTimeWeather.length);
      return (
        <div className="dashboard">
          <header>
            <div className="city-date">
              <h1>
                {weather.city.name}, {weather.city.country}
              </h1>
              <span>{timeStampToDate(UNIX_to_Timestamp(list[0].dt))}</span>
            </div>
            <UnitToggle onToggle={setUnit} unitName={unit} />
          </header>
          <div className="main">
            <div className="today">
              <div className="recent">
                <div className="detail">
                  <img
                    src={weatherIcon(list[0].weather.icon, "2x")}
                    alt="weather icon"
                  />
                  <div className="temp-desc">
                    <span className="temp">
                      {list[0].temps.temp}
                      {/* &nbsp;  */}
                      &deg;
                      {/* {unit[0]} */}
                    </span>
                    <span className="desc">{list[0].weather.description}</span>
                  </div>
                </div>
                <div className="other">
                  <div>
                    <span>{list[0].temps.temp_max}&deg;</span>
                    <span>Max</span>
                  </div>
                  <div>
                    <span>{list[0].temps.temp_min}&deg;</span>
                    <span>Min</span>
                  </div>
                  <div>
                    <span>{list[0].wind.speed} m/s</span>
                    <span>Wind</span>
                  </div>
                  <div>
                    <span>{list[0].wind.deg}&deg;</span>
                    <span>Dir</span>
                  </div>
                  <div>
                    <span>{list[0].humidity}%</span>
                    <span>Hum</span>
                  </div>
                  <div>
                    <span>
                      {list[0].rain ? list[0].rain["3h"] * 100 : list[0].rain}%
                    </span>
                    <span>Rain</span>
                  </div>
                </div>
              </div>

              <div className="different-time">
                <h2>Today{"'"}s weather</h2>
                <div className="cards">
                  {differentTimeWeather.map((item, i) => {
                    return (
                      <TimeCard
                        key={i}
                        temp={item.temps.temp}
                        timestamp={item.dt}
                        icon={item.weather.icon}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="next5"></div>
          </div>
        </div>
      );
    } else return <div className="dashboard">{weather.message}</div>;
  }
  return <div className="dashboard">No Data, Please use Search bar...</div>;
};

export default Dashboard;
