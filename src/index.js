import displayInit from './dom';
import './assets/css/style.css';
import autoComplete from './search';

autoComplete();
const search = document.getElementById('search');
search.onclick = function clicker() {
  const city = document.getElementById('autocomplete').value;
  displayInit(city);
};