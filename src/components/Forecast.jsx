function Forecast({ forecast }) {
    if (!forecast || forecast.length === 0) {
        return null;
    }

    return (
        <div className="mt-4">
            <h3 className="text-white mb-5">5-Day Forecast</h3>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center g-4">
                {forecast.map((day, index) => (
                    <div key={index} className="col text-center mb-3">
                        <div className="card bg-transparent text-white p-4 shadow-sm h-100 d-flex flex-column justify-content-between">

                            <p className="fw-bold">{day.date}</p>

                            <img
                                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                                alt="weather icon"
                            />

                            <p className="mb-0">{day.temp}°C</p>
                            <p className="text-capitalize small">{day.description}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;