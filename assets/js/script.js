// Variables

let gameArr = [];
let playerArr = [];
let powerOn = false;
let sound = false;
let win = false;

const onSwitch = document.getElementById('onSwitch');
const soundToggle = document.getElementById('sound');
const startBtn = document.getElementById('start-btn');
const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const scoreCounter = document.getElementById('score');

// Event Listeners

onSwitch.addEventListener('click', function (event) {
  if (onSwitch.checked == true) {
    powerOn = true;
    scoreCounter.innerHTML = '-';
  } else {
    powerOn = false;
    scoreCounter.innerHTML = '';
  }
});

soundToggle.addEventListener('change', function () {
  if (soundToggle === false) {
    soundToggle = true;
  } else if (soundToggle === true) {
    soundToggle = false;
  }
});

startBtn.addEventListener('click', function () {
  if (powerOn === true) {
    startGame();
  }
});

// Functions

function startGame() {
  resetGame();
}

function resetGame() {
  win = false;
  score = 0;
}

function flash() {}
