// Import stylesheets
import "./style.css";

function download() {
  let URL =
    "https://data.mongodb-api.com/app/temperature-lwkwk/endpoint/cerca?n=";
  fetch(URL + document.getElementById("input").value)
    .then(response => response.json(), error => alert(error))
    .then(data => (document.getElementById("temp").innerHTML = data));
}

document.getElementById("chiedi").addEventListener("click", download);
