var startBtn = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
// var choicesButtons = document.getElementById()
var score = 0

startBtn.addEventListener("click", startQuiz)

var questions = [{
    text: "How many months have 28 days?",
    answers: [
        text:"1", correct: false
        text: "6", "9", "12",],
    answer: "12"
}, {
    text: "whos the prez?",
    choices: ["dog", "cat", "ya boy", "trump",],
    answer: "trump"
},
]

// for(var i<0; i <questions.length, i++ ){

// }

function startQuiz() {
    // startBtn.onclick("hide");
    startBtn.classList.add("hide");
    // startBtn.addEventListener("click", startQuiz());
    console.log("as;ldkfj")
}
startQuiz();
// startBtn.onclick = startQuiz;
var timeEl = document.querySelector(".time");
var secondsLeft = 3

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left until catastrophic failure";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();

        }
    }, 1000)
}
function sendMessage() {
    timeEl.textContent = " You have failed catastrophically";
}
setTime();
