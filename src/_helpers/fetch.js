const API_key = process.env.REACT_APP_API_KEY;

export const uriByCityName = (cityName) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_key}`;

export const FetchWeatherData = () => {
    
};
