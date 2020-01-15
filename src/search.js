const autoComplete = () => {
  var placesAutocomplete = places({
    appId: 'plH5ZDEU8PVD',
    apiKey: '44054bfaac8e96b587b8cf11662093fa',
    container: document.querySelector('#autocomplete'),
    templates: {
      value: function(suggestion) {
        return suggestion.name;
      }
    }
  }).configure({
    type: 'city',
    aroundLatLngViaIP: false,
  });
};
async function fetchData(city) {
  //const APIKEY = '0759c03e88ec0996434c322f104449a7';
  const APIKEY = process.env.APIKEY;
  const response = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`, { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData);

  return weatherData;
}

export { fetchData };