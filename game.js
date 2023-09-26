// Iteration 2: Generate 2 random number and display it on the screen


const btn1 = document.getElementById("number1");
var number1 = Math.round(Math.random()*100);
btn1.innerHTML = number1;


const btn2 = document.getElementById("number2")
var number2 = Math.round(Math.random()*100);
btn2.innerHTML = number2;

// Iteration 3: Make the options button functional

const greaterthan = document.getElementById("greater-than")
const lesserthan = document.getElementById("lesser-than")
const equalto = document.getElementById("equal-to")

var score = 0;

greaterthan.onclick = () => {
    if (number1 > number2) {
        score++;
        resetTime(timerId);
    } else {
        location.href = "./gameover.html";
    }        

number1 = Math.round(Math.random()*100);
btn1.innerHTML = number1;

number2 = Math.round(Math.random()*100);
btn2.innerHTML = number2;
};


equalto.onclick = () => {
    if (number1 == number2) {
        score++;
        resetTime(timerId);
    }  else {
        location.href = "./gameover.html";
    }

number1 = Math.round(Math.random()*100);
btn1.innerHTML = number1;

number2 = Math.round(Math.random()*100);
btn2.innerHTML = number2;
};

lesserthan.onclick = () => {
    if (number1 < number2) {
        score++;
        resetTime(timerId);
    }  else {
        location.href = "./gameover.html";
    }

number1 = Math.round(Math.random()*100);
btn1.innerHTML = number1;

number2 = Math.round(Math.random()*100);
btn2.innerHTML = number2;
};

// Iteration 4: Build a timer for the game

var time = 5
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
    time = 5;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time ==0) {
            location.href = "./gameover.html";
        }
        timer.innerHTML = time;
    }, 1000);
    localStorage.setItem("score",score);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();