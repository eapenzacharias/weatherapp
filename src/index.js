import displayInit from './dom';
import './assets/css/style.css';

const search = document.getElementById('search');
search.onclick = function() {
  const city = document.getElementById('autocomplete').value;
  displayInit(city);
};