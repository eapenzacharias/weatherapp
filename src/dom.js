import { reportWeather } from './fetchdata';

function tempC(weather) {
  document.getElementById('main-temp').innerHTML = `${weather.tempC} &#8451;`;
  document.getElementById('feels-like').innerHTML = `${weather.tempFeelC} &#8451;`;
  document.getElementById('min-temp').innerHTML = `${weather.tempMinC} &#8451;`;
  document.getElementById('max-temp').innerHTML = `${weather.tempMaxC} &#8451;`;
}

function tempF(weather) {
  document.getElementById('main-temp').innerHTML = `${weather.tempF} &#8457;`;
  document.getElementById('feels-like').innerHTML = `${weather.tempFeelF} &#8457;`;
  document.getElementById('min-temp').innerHTML = `${weather.tempMinF} &#8457;`;
  document.getElementById('max-temp').innerHTML = `${weather.tempMaxF} &#8457;`;
}

async function displayInit(city) {
  let weather = await reportWeather(city);

  const icon = document.createElement('img');
  icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.icon}.png`);
  document.getElementById('weather-icon').innerHTML = icon.outerHTML;
  document.getElementById('weather-report').innerHTML = weather.text;
  document.getElementById('location').innerHTML = `${weather.city}, ${weather.country}`

  tempC(weather);
  document.getElementById('in-c').onclick = function() { tempC(weather); }
  document.getElementById('in-f').onclick = function() { tempF(weather); }
}

export { displayInit }