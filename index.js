// Import stylesheets
import './style.css';

var URL = 'https://eu-west-2.aws.data.mongodb-api.com/app/temperature-lxqlq/endpoint/';

var cities = [];

function $(s) {
  return document.getElementById(s);
}

function download() {
  fetch(URL + 'acquisisci?n=' + $('input').value)
    .then(
      (response) => response.json(),
      (error) => alert(error)
    )
    .then((data) => {
      console.log(data);
      $('temp').innerHTML = data;
    });
}

function insert() {
  let newCity = $('nuovo').value;
  if (newCity === '') return;
  fetch(URL + 'inserisci?n=' + newCity)
    .then(
      (response) => response.json(),
      (error) => alert(error)
    )
    .then(() => {
      cities.push(newCity);
      refreshList();
    });
}

function refreshList() {
  $('cityList').innerHTML = '';
  cities.forEach((c) => ($('cityList').innerHTML += '<li> ' + c));
}

$('chiedi').addEventListener('click', download);
$('inserisci').addEventListener('click', insert);

fetch(URL + 'elenco')
  .then(
    (response) => response.json(),
    (error) => alert(error)
  )
  .then((data) => {
    cities = data;
    refreshList();
  });
