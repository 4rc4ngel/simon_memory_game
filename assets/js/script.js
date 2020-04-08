// Variables

let powerOn = false;
let sound = false;
let win = false;
let score = 0;

const onSwitch = document.getElementById('onSwitch');
const soundToggle = document.getElementById('sound');
const startBtn = document.getElementById('start-btn');
let scoreCounter = document.getElementById('score');

// Event Listeners

onSwitch.addEventListener('change', function () {
  if (powerOn === false) {
    powerOn = true;
    scoreCounter = scoreCounter.innerText = score;
  } else if (powerOn === true) {
    powerOn = false;
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
