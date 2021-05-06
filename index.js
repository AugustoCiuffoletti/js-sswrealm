// Import stylesheets
import "./style.css";

var URL =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/temperature-lwkwk/service/temperature/incoming_webhook/";

var cities=[];

function $(s) {
  return document.getElementById(s);
}

function download() {
  fetch(URL + "cerca?n=" + $("input").value)
    .then(response => response.json(), error => alert(error))
    .then(data => ($("temp").innerHTML = data));
}

function aggiornato(newCity) {
  fetch(URL + "aggiornato?n=" + newCity)
    .then(response => response.json(), error => alert(error))
    .then(data => {
      console.log(data)
      refreshList();
    });
}

function insert() {
  let newCity = $("nuovo").value;
  if ( newCity === "" ) return;
  fetch(URL + "inserisci?n=" + newCity)
    .then(response => response.json(), error => alert(error))
    .then(data => {
      cities.push(newCity);
      aggiornato(newCity)
        .then(response => response.json(), error => alert(error))
        .then( () => { refreshList(); });
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