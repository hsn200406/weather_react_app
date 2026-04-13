function CurrentWeather({ weather, unit }) {
    if (!weather || weather.cod != 200) {
        return null;
    }

    const temp = unit === "metric"
    ? weather.main.temp
    : (weather.main.temp * 9) / 5 + 32;

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="weather-card text-white">
            <h3 className="mb-3">Current Weather</h3>
            <h2>
                {weather.name}, {weather.sys.country}
            </h2>
            <p className="text-muted mb-3">{currentDate}</p>

            <p>
                Temperature: {Math.round(temp)}°
                {unit === "metric" ? "C" : "F"}
                </p>
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