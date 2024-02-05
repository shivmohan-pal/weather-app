import { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FetchWeatherData, uriByCityName } from "../_helpers/fetch";
import useWeather from "../_context/weatherContext";
import useNoInternet from "../_context/NoInternetContext";

const SearchBar = () => {
  const [search, setSearch] = useState("New Delhi");
  const { noInternet, setNoInternet } = useNoInternet();

  const { weather, setWeather } = useWeather();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    setSearch(inputValue);
  };

  useEffect(() => {
    FetchWeatherData(uriByCityName(search), setWeather, setNoInternet);
  }, [search, setNoInternet, setWeather]);
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input type="text" placeholder="City name..." name="search" id="search" />
      <button type="submit">
        <FaSearchLocation fontSize={"1.5rem"} />
      </button>
    </form>
  );
};

export default SearchBar;
