// Iteration 5: Store the player score and display it on the game over screen

let score = localStorage.getItem("score");

var scoreBoard = document.getElementById("score-board");

scoreBoard.innerHTML = score;

var playagain = document.getElementById("play-again-button");

playagain.onclick = () => {
    location.href = "./game.html";
};


