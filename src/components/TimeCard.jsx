import { weatherIcon } from "../_helpers/fetch";
import { UNIX_to_Timestamp, time12hFromat } from "../_helpers/math";

const TimeCard = ({ temp, timestamp, icon }) => {
  const time = time12hFromat(UNIX_to_Timestamp(timestamp));
  return (
    <div className="time-card">
      <span className="time">{`${time[0]}${time[2]}`}</span>
      <img src={weatherIcon(icon)} alt="weather icon" />
      <span className="temp">{temp}&deg;</span>
    </div>
  );
};

export default TimeCard;
