var reviewsDiv = document.getElementById("reviews")
var scheduleDiv = document.getElementById("schedule")
var contactDiv = document.getElementById("contact")
var videosDiv = document.getElementById("videos")
var servicesDiv = document.getElementById("services")


let apiKey = 'f0500e4ecfa1403e916ccc44a848a8d5';

fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey)
  .then((response) => response.json())
  .then((data) => locationVerify(data));

function locationVerify(data) {
    if(data.region_iso_code != "TX") {
    console.log("Jordan's Mom does not service this area") 
    } else if (data.region_iso_code == "TX") {
        console.log("Jordan's Mom does service this area")
    }
} 

