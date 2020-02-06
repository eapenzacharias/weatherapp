// eslint-disable-next-line
const places = require('places.js');

function autoComplete() {
  const ID = process.env.ALGOID;
  const KEY = process.env.ALGOKEY;
  const placesAutocomplete = places({
    appId: ID,
    apiKey: KEY,
    container: document.querySelector('#autocomplete'),
    templates: {
      value(suggestion) {
        return suggestion.name;
      },
    },
  }).configure({
    type: 'city',
    aroundLatLngViaIP: true,
  });
  return placesAutocomplete;
}


export default autoComplete;