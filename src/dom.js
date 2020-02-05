import Unsplash from 'unsplash-js';
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

async function imgUnsplash(text) {
  // eslint-disable-next-line prefer-destructuring
  const UACCESS = process.env.UACCESS;
  const unsplash = new Unsplash({
    accessKey: `${UACCESS}`,
  });
  const bg = await unsplash.search.photos(`${text}+sky`, 1, 1);
  const bgJson = await bg.json();
  document.body.style.backgroundImage = `url(${bgJson.results[0].urls.full})`;
  const credit = document.getElementById('img-txt');
  credit.innerHTML = `Photo by ${bgJson.results[0].user.first_name} ${bgJson.results[0].user.last_name} from Unsplash`;
  credit.href = `${bgJson.results[0].links.html}`;
}

async function displayInit(city) {
  const weather = await reportWeather(city);

  const icon = document.createElement('img');
  icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.icon}.png`);
  document.getElementById('weather-icon').innerHTML = icon.outerHTML;
  document.getElementById('weather-report').innerHTML = weather.text;
  document.getElementById('location').innerHTML = `${weather.city}, ${weather.country}`;

  imgUnsplash(weather.text);

  tempC(weather);
  document.getElementById('in-c').onclick = function callTempC() {
    tempC(weather);
  };
  document.getElementById('in-f').onclick = function callTempF() {
    tempF(weather);
  };
}

export default displayInit;