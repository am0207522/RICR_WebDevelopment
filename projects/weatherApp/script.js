const API_KEY = "API_KEY";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();
  if (!cityName) return;

  // UI state
  showLoader(true);
  hideError();
  document.getElementById("weatherResult").style.display = "none";

  try {
    const { Lattitude, Longitude } = await getGeoLocation(cityName);

    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;
    const response = await fetch(WEATHER_API);
    const data = await response.json();

    // Your original temperature logic
    const temperature = data.main.temp - 273.15;
    document.getElementById("Temperature").innerText = temperature.toFixed(2);

    // Extra fields for the new UI
    document.getElementById("feelsLike").innerText    = (data.main.feels_like - 273.15).toFixed(1) + "°C";
    document.getElementById("humidity").innerText     = data.main.humidity + "%";
    document.getElementById("windSpeed").innerText    = data.wind.speed + " m/s";
    document.getElementById("weatherDesc").innerText  = data.weather[0].description;
    document.getElementById("cityLabel").innerText    = data.name;
    document.getElementById("countryLabel").innerText = data.sys.country;

    document.getElementById("weatherResult").style.display = "block";
  } catch (e) {
    showError();
  } finally {
    showLoader(false);
  }
}

// Your original function — unchanged
async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  const response = await fetch(GEO_LOC_API);
  const data = await response.json();
  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;
  return { Lattitude, Longitude };
}

// Helper functions for UI
function showLoader(show) {
  document.getElementById("loader").style.display = show ? "block" : "none";
}
function showError() {
  document.getElementById("errorMsg").style.display = "block";
}
function hideError() {
  document.getElementById("errorMsg").style.display = "none";
}