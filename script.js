var startBtn = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
// var choicesButtons = document.getElementById()
var score = 0

// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;



// var questions = [{
//     text: "How many months have 28 days?", 
//     choices: ["1", "6", "9", "12",],
//     answer: "12"},{
//     text: "whos the prez?", 
//     choices: ["dog", "cat", "ya boy", "trump",],
//     answer: "trump"},
// ]

// for(var i<0; i <questions.length, i++ ){

// }

// function startQuiz() {
//     // startBtn.classList.add("hide");
//     // startBtn.addEventListener("click," function());
//     console.log("as;ldkfj")
// }
// startBtn.onclick = startQuiz;
var timeEl = document.querySelector(".time");
var secondsLeft = 60

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left until catastrophic failure";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000)}
    function sendMessage() {
        timeEl.textContent = " You have failed catastrophically";
    }
    setTime();
    