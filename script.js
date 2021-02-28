var startBtn = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
// var choicesButtons = document.getElementById()
var getQuestion = document.getElementById("question");
var answerButton1 =document.getElementById("answer-1");
var answerButton2 =document.getElementById("answer-2");
var answerButton3 =document.getElementById("answer-3");
var score = 0

// startBtn.addEventListener("click", startQuiz)

startBtn.addEventListener("click",function startQuiz() {
    // startBtn.onclick("hide")
        startBtn.classList.add("hide");
    console.log("as;ldkfj")
    showQuestion();
    setTime();

})
// startQuiz();
// startBtn.onclick = startQuiz;

function showQuestion(questions) {
    var questions = [
        {
            text: "How many months have 28 days?",
            answers: [
                { text: "1", correct: false },
                { text: "6", correct: false },
                { text: "12", correct: true }
            ]
    
            // text: "whos the prez?",
            // choices: ["dog", "cat", "ya boy", "trump",],
            // answer: "trump"
        },
    ]
    
    for(var i = 0; i < questions.length; i++ ){
        getQuestion.textContent = questions[i].text
        for (let i = 0; i < answers.length; i++) {
            answerButton1.textContent = answers[i].text[i]
            console.log(answerButton1);
        answerButton2.textContent = answers[i].text[i]
        answerButton3.textContent = answers[i].text[i]
            
        }
        
        }
    
}



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
