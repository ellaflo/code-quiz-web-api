let currentQuestionIndex = 0;
let time = question.length * 15;
let timerID;



//HTML elements
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedBackElement = document.getElementById("feedback");


function getQuestion (){

}

function questionClick(){

}

function startQuiz(){

}

function quizEnd(){

}

function clockTick(){

}

function saveHighScore(){

}

function checkForEnter(event){

}


startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);