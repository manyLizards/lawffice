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
let quizButton = document.getElementById("quizButton")
let scoreBoard = document.getElementById("scoreBoard")
let firstQuestion = document.getElementById("1Question")
let secondQuestion = document.getElementById("2Question")
let thirdQuestion = document.getElementById("3Question")
let fourthQuestion = document.getElementById("4Question")  


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




quizButton.onclick = function() {
    localStorage.clear()
    quizButton.style.display = "none"
    firstQuestion.style.display = "block"
}


    // yes workflow
document.getElementById("yes1").onclick = function() {
    firstQuestion.style.display = "none"
    secondQuestion.style.display = "block"
    localStorage.setItem("answer1", "yes")
} 

document.getElementById("yes2").onclick = function() {
    secondQuestion.style.display = "none"
    thirdQuestion.style.display = "block"
    localStorage.setItem("answer2", "yes")
}

document.getElementById("yes3").onclick = function() {
    thirdQuestion.style.display = "none"
    fourthQuestion.style.display = "block"
    localStorage.setItem("answer3", "yes")
}

document.getElementById("yes4").onclick = function() {
    fourthQuestion.style.display = "none"
    localStorage.setItem("answer4", "yes")
    scoreHandler()
}

// no workflow
document.getElementById("no1").onclick = function() {
    firstQuestion.style.display = "none"
    secondQuestion.style.display = "block"
} 

document.getElementById("no2").onclick = function() {
    secondQuestion.style.display = "none"
    thirdQuestion.style.display = "block"
}

document.getElementById("no3").onclick = function() {
    thirdQuestion.style.display = "none"
    fourthQuestion.style.display = "block"
}

document.getElementById("no4").onclick = function() {
    fourthQuestion.style.display = "none"
    scoreHandler()
}




function scoreHandler() {
scoreBoard.style.display = "block"
var score = localStorage.length/ 4 * 100
if (score > 49) {
    scoreBoard.append("You need a divorce! Get out of there!")
} else {
    scoreBoard.append("No. You are meant to be. Hopefully that's a good thing!  ")
}
}