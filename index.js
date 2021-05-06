// Import stylesheets
import "./style.css";

var URL =
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/temperature-lwkwk/service/temperature/incoming_webhook/";

var cities;

function download() {
  fetch(URL + "cerca0?n=" + document.getElementById("input").value)
    .then(response => response.json(), error => alert(error))
    .then(data => 
      document.getElementById("temp").innerHTML = data.temperatura.$numberInt );
}

document.getElementById("chiedi").addEventListener("click", download);
  fetch(URL + "elenco" + document.getElementById("input").value)
    .then(response => response.json(), error => alert(error))
    .then(data => {
      console.log(data);
      cities=data;
    });