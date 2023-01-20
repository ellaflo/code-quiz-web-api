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
    timer -= 15;
    
    if(time <=0){
        time = 0;
    }
    
 timerElement.textContent = time;  
 
 feedBackElement.textContent = "Wrong"
} else {
    sfxRight.play();
    feedBackElement.textContent ="Correct";
}

feedBackElement.setAttribute("class", "feedback");

setTimeout(function (){
    feedBackElement.setAttribute("class", "feedback hide")
},1000),

currentQuestionIndex++;

if(currentQuestionIndex === questions.length) {
    quizEnd()
} else {
    getQuestion();
}
}

function getQuestion (){
//get current question object from array
let currentQuestion = questions[currentQuestionIndex];

//update title with current question
let titleElement = document.getElementById("question-title");
titleElement.textContent = currentQuestion.title;

//clear out any old queston choices
choicesElement.innerHTML = "";

//loop over choices
currentQuestion.choices.forEach(function(choice, index) {
    // create new button for each choice
    let choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);

    choiceButton.textContent = `${index + 1}. ${choice}`

    //attach click event Listener to each choice
    choiceButton.addEventListener = ("click", questionClick);

    //display on the page
    choicesElement.append(choiceButton);

});

function quizEnd(){
    clearInterval(timerID);
    
    let endsScreenElement = document.getElementById("end-screen");
    endsScreenElement.removeAttribute("class");
    
    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;
    
    questionsElement.setAttribute("class", "hide");
    }


}

function startQuiz(){
let startScreenElement = document.getElementById("start-screen");
startScreenElement.setAttribute("class", "hide");


questionsElement.removeAttribute("class");

timerID = setInterval(clockTick, 1000);

timerElement.textContent = time;

getQuestion();
}


function clockTick(){
time--;
timerElement.textContent = time;

if(time<= 0) {
    quizEnd();
}
}

function saveHighScore() {
  //get value of input box
  let initials = initialsEllement.value.trim();

  //make sure value wasn't empty
  if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      let highscores =
          JSON.parse(localStorage.getItem("highscores"))  || [];

      //format new score object for current user
      let newScore = {
          score: time,
          initials: initials
        };

 //save to localstorage
 highScores.push(newScore);
 window.localStorage.setItem("highscores", JSON.stringify(highscores));

 //redirect to next page
 window.location.href = "highscores.html";
    }
}

function checkForEnter(event){
if(event.key ==="Enter") {
    saveHighScore();
}
}


startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);  