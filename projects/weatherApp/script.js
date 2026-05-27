const API_KEY = "enter your API_KEY";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  if (!cityName) return;

  showLoader(true);
  hideError();

  document.getElementById("weatherResult").style.display =
    "none";

  try {

    const { latitude, longitude } =
      await getGeoLocation(cityName);

    const WEATHER_API =
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

    const response =
      await fetch(WEATHER_API);

    const data =
      await response.json();

    // Weather Data
    document.getElementById("Temperature").innerText =
      data.main.temp.toFixed(1);

    document.getElementById("feelsLike").innerText =
      data.main.feels_like.toFixed(1) + "°C";

    document.getElementById("humidity").innerText =
      data.main.humidity + "%";

    document.getElementById("windSpeed").innerText =
      data.wind.speed + " m/s";

    document.getElementById("weatherDesc").innerText =
      data.weather[0].description;

    document.getElementById("cityLabel").innerText =
      data.name;

    document.getElementById("countryLabel").innerText =
      data.sys.country;

    // Sunrise
    const sunriseTime = new Date(
      data.sys.sunrise * 1000
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

    document.getElementById("sunrise").innerText =
      sunriseTime;

    // Sunset
    const sunsetTime = new Date(
      data.sys.sunset * 1000
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

    document.getElementById("sunset").innerText =
      sunsetTime;

    // Air Quality
    document.getElementById("airQuality").innerText =
      "Good";

    document.getElementById("weatherResult").style.display =
      "block";

  } catch (error) {

    showError();

  } finally {

    showLoader(false);

  }
}

async function getGeoLocation(city) {

  const GEO_LOC_API =
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response =
    await fetch(GEO_LOC_API);

  const data =
    await response.json();

  if (data.length === 0) {
    throw new Error("City not found");
  }

  return {
    latitude: data[0].lat,
    longitude: data[0].lon
  };
}

// Helper Functions
function showLoader(show) {

  document.getElementById("loader").style.display =
    show ? "block" : "none";
}

function showError() {

  document.getElementById("errorMsg").style.display =
    "block";
}

function hideError() {

  document.getElementById("errorMsg").style.display =
    "none";
}