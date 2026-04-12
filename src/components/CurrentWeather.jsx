function CurrentWeather({ weather }) {
    if (!weather || weather.cod != 200) {
        return null;
    }

    return (
        <div className="weather-card text-white">
            <h2>
                {weather.name}, {weather.sys.country}
            </h2>

            <p>Temperature: {Math.round(weather.main.temp)}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>

            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="Weather icon"
            />

        </div>
    );
}

export default CurrentWeather;