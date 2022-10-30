// element variables
var reviewsDiv = document.getElementById("reviews")
var scheduleDiv = document.getElementById("schedule")
var contactDiv = document.getElementById("contact")
var videosDiv = document.getElementById("videos")
var servicesDiv = document.getElementById("services")
var image = document.querySelector(".my-image");
var divCheck = document.getElementById("eligibilityCheck")

// geo location API key
let locationAPIKey = 'f0500e4ecfa1403e916ccc44a848a8d5';

// fetch request for user info 
fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=' + locationAPIKey)
  .then((response) => response.json())
  .then((data) => locationVerify(data));

// conditional to verify if location is in area of operation. data is passed through by fetch request
function locationVerify(data) {
    if(data.region_iso_code != "TX") {
        contactDiv.append("Maisie does not service your area. That sucks, but here's a picture of a cat!")
        fetch("https://cataas.com/cat")
        .then((response) => response.blob())
        .then((blob) => {
        var objectURL = URL.createObjectURL(blob);
        image.src = objectURL;
     });
    } else if (data.region_iso_code == "TX") {
        divCheck.append("Maisie provides service to your area!")
    }
} 



