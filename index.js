// Import stylesheets
import "./style.css";

var URL =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/temperature-lwkwk/service/temperature/incoming_webhook/";

var cities=[];

function $(s) {
  return document.getElementById(s);
}

function download() {
  fetch(URL + "aggiornato?n=" + $("input").value)
    .then(response => response.json(), error => alert(error))
    .then(data => {
      console.log(data)
      $("temp").innerHTML = data
    });
}

function insert() {
  let newCity = $("nuovo").value;
  if ( newCity === "" ) return;
  fetch(URL + "inserisci?n=" + newCity)
    .then(response => response.json(), error => alert(error))
    .then( () => {
      cities.push(newCity);
      refreshList();
    });
}

function refreshList() {
  $("cityList").innerHTML = "";
  cities.forEach(c => ($("cityList").innerHTML += "<li> " + c));
}

$("chiedi").addEventListener("click", download);
$("inserisci").addEventListener("click", insert);

fetch(URL + "elenco" + $("input").value)
  .then(response => response.json(), error => alert(error))
  .then(data => { cities = data; refreshList()} );