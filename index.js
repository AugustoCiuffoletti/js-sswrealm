// Import stylesheets
import "./style.css";

var URL =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/temperature-lwkwk/service/temperature/incoming_webhook/";

var cities;

function $(s) { return document.getElementById(s)}

function download() {
  fetch(URL + "cerca?n=" + $("input").value)
    .then(response => response.json(), error => alert(error))
    .then(data => 
      $("temp").innerHTML = data );
}

$("chiedi").addEventListener("click", download);

fetch(URL + "elenco" + $("input").value)
  .then(response => response.json(), error => alert(error))
   .then(data =>
    data.forEach( c => $("cityList").innerHTML += "<li> " + c )
    );

