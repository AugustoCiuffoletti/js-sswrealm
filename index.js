// Import stylesheets
import "./style.css";

function download() {
  let URL =
    "https://webhooks.mongodb-realm.com/api/client/v2.0/app/temperature-lwkwk/service/temperature/incoming_webhook/cerca0?n=";
  fetch(URL + document.getElementById("input").value)
    .then(response => response.json(), error => alert(error))
    .then(
      data => {
        console.log(data);
        (document.getElementById("temp").innerHTML =
          data.temperatura.$numberInt)}
    );
}

document.getElementById("chiedi").addEventListener("click", download);
