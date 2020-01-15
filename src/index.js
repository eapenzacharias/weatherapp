import { fetchData } from './search';
import './assets/css/style.css';

const search = document.getElementById('search')
search.onclick = function() {
  const city = document.getElementById('autocomplete').value
  fetchData(city);
}