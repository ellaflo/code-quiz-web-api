//To track
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;



//HTML elements
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedBackElement = document.getElementById("feedback");

//sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function questionClick(){
    if(this.value !== questions[currentQuestionIndex].answer) {
    timerElement.textContent = time;
    
    if(time <=0){
        quizEnd();
    }
    
 timerElement.textContent = time;  
 
 feedBackElement.textContent = "Wrong"
} else {
    sfxRight.play();
    feedBackElement.textContent ="Correct"
}


function getQuestion (){
//get current question object from array
let currentQuestion = questions[currentQuestionIndex];

//update title with current question
var titleElement = document.getElementById("question-title");
titleElement.textContent = currentQuestion.title;

//clear out any old queston choices
choicesElement.innerHTML = "";

//loop over choices
currentQuestion.choices.forEach(function(choice, index) {
    // create new button for each choice
    let choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);

    choiceButton.textContent = index + 1 + ". " + choice;

    //attach click event Listener to each choice
    choiceButton.addEventListener = ("click", questionClick);

    //display on the page
    choicesElement.appendChild(choiceButton);

});



}

function startQuiz(){
let startScreenElement = document.getElementById("start-screen");
startScreenElement.setAttribute("class", "hide");


questionsElement.removeAttribute("class");

timerID = setInterval(clockTick, 1000);

timerElement.textContent = time;

getQuestion();
}

function quizEnd(){
clearInterval(timerID);

let endsScreenElement = document.getElementById("end-screen");
endsScreenElement.removeAttribute("class");

let finalScoreElement = document.getElementById("final-score");
finalScoreElement.textContent = time;

}

function clockTick(){

}

function saveHighScore(){

}

function checkForEnter(event){

}


startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);}