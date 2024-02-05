import "./App.css";
import { NoInternetContextProvider } from "./_context/NoInternetContext";
import { WeatherContextProvider } from "./_context/weatherContext";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NoInternetContextProvider>
        <WeatherContextProvider>
          <Navbar />
          <main>
          <Dashboard />
          </main>
        </WeatherContextProvider>
      </NoInternetContextProvider>
    </div>
  );
}

export default App;
