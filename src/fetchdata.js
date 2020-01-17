async function fetchData(city) {
  const APIKEY = process.env.APIKEY;
  const response = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`, { mode: 'cors' });
  const weatherData = await response.json();
  return weatherData;
}

async function reportWeather(city) {
  const data = await fetchData(city);
  var report = {};

  report.tempC = (parseFloat(data.main.temp) - 273.15).toFixed(1);
  report.tempF = ((parseFloat(data.main.temp) - 273.15) * 9 / 5 + 32).toFixed(1);

  report.tempFeelC = (parseFloat(data.main.feels_like) - 273.15).toFixed(1);
  report.tempFeelF = ((parseFloat(data.main.feels_like) - 273.15) * 9 / 5 + 32).toFixed(1);

  report.tempMinC = (parseFloat(data.main.temp_min) - 273.15).toFixed(1);
  report.tempMinF = ((parseFloat(data.main.temp_min) - 273.15) * 9 / 5 + 32).toFixed(1);

  report.tempMaxC = (parseFloat(data.main.temp_max) - 273.15).toFixed(1);
  report.tempMaxF = ((parseFloat(data.main.temp_max) - 273.15) * 9 / 5 + 32).toFixed(1);

  report.text = data.weather[0].main;
  report.icon = data.weather[0].icon;

  report.city = data.name;
  report.country = data.sys.country;

  return report;
}

export { reportWeather };