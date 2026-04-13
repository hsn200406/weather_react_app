# Weather React App

A beautiful, responsive weather application built with React and Vite that provides real-time weather information and forecasts for any city in the world.

## � Live Demo

**[Visit the Live App](https://weather-react-2kqeql21s-hsn200406s-projects.vercel.app/)** – Try it out now without any setup!

## �🌟 Features

- **Current Weather**: Search for any city and view real-time weather data including temperature, humidity, wind speed, and weather conditions
- **5-Day Forecast**: View the 5-day weather forecast with daily temperature and weather descriptions
- **Weather Icons**: Visual weather condition icons for intuitive understanding
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Graceful error messages for invalid city names and network errors

## 🛠️ Tech Stack

- **React 19**: Modern React library for building user interfaces
- **Vite**: Next-generation frontend build tool for fast development
- **Bootstrap 5**: Responsive CSS framework for styling
- **OpenWeather API**: Real-time weather data provider

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** (comes with Node.js)

You'll also need an **OpenWeather API Key**:
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key from your account dashboard

## 🚀 Setup Instructions

### 1. Clone or Download the Repository
```bash
cd weather_react_app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment Variables
Create a `.env.local` file in the root directory of the project:
```bash
VITE_OPENWEATHER_API_KEY=your_api_key_here
```
Replace `your_api_key_here` with your OpenWeather API key.

### 4. Start the Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### 5. Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

## 💻 How to Use

1. **Open the Application**: Navigate to the local development URL shown after running `npm run dev`
2. **Search for a City**: Type the name of any city in the search bar (e.g., "London", "Tokyo", "New York")
3. **View Current Weather**: Once you search, the app displays:
   - City name and country
   - Current temperature in Celsius
   - Weather condition (e.g., "Partly cloudy")
   - Humidity percentage
   - Wind speed
   - A visual weather icon
4. **Check the Forecast**: Below the current weather, you'll see a 5-day forecast with daily temperature and weather conditions
5. **Search Another City**: Simply enter a different city name to update the weather information

## 📊 What to Expect

- **Instant Results**: Weather data loads quickly (typically within 1-2 seconds)
- **Loading Indicator**: A "Loading..." message appears while fetching data
- **Error Messages**: 
  - "City not found. Please try again." – if the city name is invalid
  - "Network error. Please try again later." – if there's a connection issue
  - "Please enter a valid city name." – if the search field is empty
- **Visual Feedback**: Weather icons and color-coded cards make it easy to understand weather conditions at a glance

## 🎨 Project Structure

```
weather_react_app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx        # City search input component
│   │   ├── CurrentWeather.jsx   # Current weather display
│   │   └── Forecast.jsx         # 5-day forecast component
│   ├── App.jsx                  # Main app component with API logic
│   ├── main.jsx                 # React entry point
│   ├── App.css                  # App styling
│   └── index.css                # Global styling
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── index.html                   # HTML entry point
```

## 📝 Available Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run lint` – Run ESLint to check code quality
- `npm run preview` – Preview the production build locally

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| "API key not found" | Ensure `.env.local` file exists and contains `VITE_OPENWEATHER_API_KEY` |
| App won't load | Check that Node.js is installed and dependencies are installed with `npm install` |
| Port 5173 already in use | Vite will automatically use the next available port |
| "City not found" error | Double-check the city spelling or try a different city |

## 👤 Author

Created as part of the Circuit Stream Bootcamp.

---

**Enjoy checking the weather!** 🌤️
