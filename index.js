// Import stylesheets
import "./style.css";

var URL =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/temperature-lwkwk/service/temperature/incoming_webhook/";

var cities;

function $(s) {
  return document.getElementById(s);
}

function download() {
  fetch(URL + "cerca?n=" + $("input").value)
    .then(response => response.json(), error => alert(error))
    .then(data => ($("temp").innerHTML = data));
}

function insert() {
  let newCity = $("nuovo").value;
  fetch(URL + "inserisci?n=" + newCity)
    .then(response => response.json(), error => alert(error))
    .then(data => {
      console.log(data);
      city.push(newCity);
    });
}

function refreshList() {
  $("cityList").innerHTML = "";
  data.forEach(c => ($("cityList").innerHTML += "<li> " + c));
}

$("chiedi").addEventListener("click", download);
$("inserisci").addEventListener("click", insert);

fetch(URL + "elenco" + $("input").value)
  .then(
    response => response.json(), error => alert(error))
  .then(
    data => data.forEach(c => ($("cityList").innerHTML += "<li> " + c))
  );
