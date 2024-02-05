import { KtoF } from "./math";

// const process = process;
const API_key = import.meta.env.VITE_API_KEY;

export const uriByCityName = (cityName) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_key}`;

export const FetchWeatherData = async (uri, setData, setError) => {
  try {
    const data = await (await fetch(uri)).json();
    // console.log(data);
    setData({
      code: data?.cod,
      message: data?.message,
      list: formatList(data?.list),
      city: data?.city,
    });
    setError(false);
  } catch (error) {
    setError(true);
  }
};

export const weatherIcon = (iconName, zoom) =>
  `https://openweathermap.org/img/wn/${iconName}${zoom ? "@" + zoom : ""}.png`; //zomm valid values : 2x or 4x

export const formatList = (list) => {
  return list?.map((item) => {
    return {
      dt: item.dt,
      dt_text: item.dt_txt,
      clouds: item.clouds.all,
      rain: item.rain ? item.rain : 0,
      pop: item.pop,
      temps: {
        temp: KtoF(item.main.temp),
        feels_like: KtoF(item.main.feels_like),
        // temp_change: KtoF(item.main.temp_kf),
        temp_min: KtoF(item.main.temp_min),
        temp_max: KtoF(item.main.temp_max),
      },
      ground_level: item.main.grnd_level,
      sea_level: item.main.sea_level,
      pressure: item.main.pressure,
      humidity: item.main.humidity,
      visibility: item.visibility,
      weather: item.weather[0],
      wind: item.wind,
    };
  });
};

export const convertDataUnit = (convertFun, temps) => {
  return {
    temp_min: convertFun(temps.temp_min),
    temp_max: convertFun(temps.temp_max),
    feels_like: convertFun(temps.feels_like),
    temp: convertFun(temps.temp),
  };
};
