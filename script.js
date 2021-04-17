var startBtn = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
// var choicesButtons = document.getElementById()
var getQuestion = document.getElementById("question");
var answer1 =document.getElementById("answer-1");
var answer2 =document.getElementById("answer-2");
var answer3 =document.getElementById("answer-3");

var score = 0


var currentQuestion = 0
var questions = [
    {
        number: 1,
        text: "How many months have 28 days?",
        answer: "C",
        answers: [
           "1",
           "6",
           "12"
        ]
    },
    {
        number: 2,
        text: "When was the most recent ASOIAF installment release?",
        answer: "B",
        answers: [
           "2020",
           "2011",
           "1999"
        ]
    },
    {
        number: 3,
        text: "When is the last day of class?",
        answer: "A",
        answers: [
           "March 4th",
           "February 22nd",
           "April 1st"
        ]
    },
    {
        number: 4,
        text: "Who is my Bootcamp Professor?",
        answer: "A",
        answers: [
           "Joe",
           "Aslan",
           "Zachary"
        ]
    },
]


startBtn.addEventListener("click",function startQuiz() {
    console.log("as;ldkfj")
    showQuestion();
    setTime();

})



answer1.addEventListener("click", selectedAnswer)
answer2.addEventListener("click", selectedAnswer)
answer3.addEventListener("click", selectedAnswer)



function showQuestion() {
    getQuestion.textContent = questions[currentQuestion].text
    answer1.textContent = questions[currentQuestion].answers[0]
    answer2.textContent = questions[currentQuestion].answers[1]
    answer3.textContent = questions[currentQuestion].answers[2]
    
}

function selectedAnswer(){
    var selectedAnswer = this.getAttribute("data-value")
    var rightAnswer = questions[currentQuestion].answer
    // var timeEl = document.querySelector(".time");
    // var secondsLeft = 25
    // secondsLeft --
    if(selectedAnswer === rightAnswer){
        score++
        console.log(score);
        timeEl.textContent = "Way to go!"
    } else {
        secondsLeft = secondsLeft - 5;
        console.log(secondsLeft);
        timeEl.textContent = "OOF!"
    }
    if(currentQuestion < questions.length -1){
        currentQuestion ++
        showQuestion()
    } else{
        timeEl.textContent = "Your trial is over"
    }
}




var timeEl = document.querySelector(".time");
var secondsLeft = 25

function setTime() {
    var timeEl = document.querySelector(".time");
    var secondsLeft = 25
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left until catastrophic failure";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();

        }
    }, 1000)
}

function theEnd() {
    resultBox.style.display = "block"
    quizBox.style.display = "none"
    document.getElementById("score").innerHTML = score;
  }
function sendMessage() {
    var timeEl = document.querySelector(".time");
// var secondsLeft = 3
    timeEl.textContent = " You have failed catastrophically";
}
