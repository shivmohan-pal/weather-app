import { createContext, useContext, useState } from "react";

const WeatherContext = createContext(null);

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  const context = useContext(WeatherContext);

  return context;
};

export default useWeather;
