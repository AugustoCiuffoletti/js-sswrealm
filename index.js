// Import stylesheets
import "./style.css";

function download() {
  let URL =
    "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/prova-wcely/service/prova/incoming_webhook/webhook0?n=";
  fetch(URL + document.getElementById("input").value)
    .then(response => response.json(), error => alert(error))
    .then(
      data =>
        (document.getElementById("temp").innerHTML =
          data.temperatura.$numberInt)
    );
}

document.getElementById("chiedi").addEventListener("click", download);
