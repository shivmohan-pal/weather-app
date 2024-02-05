import { FaTemperatureHigh } from "react-icons/fa";
import { weatherIcon } from "../_helpers/fetch";
import { UNIX_to_Timestamp } from "../_helpers/math";

const ForcastCard = ({ icon, timestamp, desc, minTemp, maxTemp,windspeed }) => {
  const time = new Date(UNIX_to_Timestamp(timestamp));
  const day = time.toDateString().split(" ")[0];
  let dateAMonth = time.toLocaleDateString().split("/");
  dateAMonth.pop();
  dateAMonth = dateAMonth.join("/");

  const average = (low, high) => (low + high) / 2;
  const averageTemp = average(minTemp, maxTemp);
  return (
    <div className="forcast-card">
      <div>
        <span className="day">{day}</span>
        <span className="date">{dateAMonth}</span>
      </div>
      <div>
        <img src={weatherIcon(icon)} alt="weather icon" />
        <span className="capitalize">{desc}</span>
      </div>
      <div>
        <span className="avg-temp">{averageTemp}</span>
        <span>
          {"Avg. "}
          <FaTemperatureHigh />
        </span>
      </div>
      <div>
        <span>{windspeed} m/s</span>
        <span>Wind</span>
      </div>
    </div>
  );
};

export default ForcastCard;
