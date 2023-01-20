function printHighScores(){
    //either get scores from localstorage or set to empty array
let highScores = JSON.parse(window.localStorage.getItem("highscores"))  || 
 //sort highscores by score property in descending order
highScores.sort(function (a, b) {
return b.score - a.score;
})

highscores.forEach(function(score) {
    //create li tag for each high score
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    //display on page
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
});

function clearHighScores(){
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onClick = clearHighScores;

//run function when page loads
printHighScores();

}
