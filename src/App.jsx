import { useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';

function App() {
  // console.log(import.meta.env.VITE_OPENWEATHER_API_KEY);

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false); // This checks if the app is currently fetching data from the API
  const [error, setError] = useState(""); // This stores any error messages that may occur during the API call
  const [forecast, setForecast] = useState([]);

  async function getWeather(city) {
    if (!city) {
      setError("Please enter a valid city name.");
      setWeather(null); // Clear previous weather data if the input is invalid
      return;
    }

    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    try {
      setLoading(true); // Set loading to true when the API call starts
      setError(""); // Clear any previous error messages
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
      const geoResponse = await fetch(geoUrl);
      const geoData = await geoResponse.json();

      if (!geoData || geoData.length == 0) {
        setWeather(null);
        setForecast([]);
        setError("City not found. Please try again."); // Set error message if the city is not found in the geocoding API
        return;
      }

      const { lat, lon } = geoData[0];

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();

      setWeather(weatherData); // Update weather state with the API response data

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      const daily = forecastData.list.filter(item =>
        item.dt_txt.includes("12:00:00") // We pick the weather data at 12 pm for each day to represent the daily forecast as it is the most accurate
      )

      const formatted = daily.map(item => ({
        date: item.dt_txt.split(" ")[0],
        temp: Math.round(item.main.temp),
        icon: item.weather[0].icon,
        description: item.weather[0].description,
      }));

      setForecast(formatted);

      } catch (err) {
        setWeather(null); // Clear previous weather data if there is an error during the API call
        setError("Network error. Please try again later."); // Set a generic network error message
      } finally {
        setLoading(false); //Stop loading
      }

  }
    return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">

          <h1 className="text-white mb-4">Weather App</h1>
          <div className='mt-5'>
            <SearchBar onSearch={getWeather} />

            {loading && <p className="text-white">Loading...</p>} {/* This displays a loading message while the API call is in progress */}
            {error && <p className="text-danger">{error}</p>} {/* This displays any error messages that occur during the API call */}

            {weather && <CurrentWeather weather={weather} />}

            {forecast.length > 0 && <Forecast forecast={forecast} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
