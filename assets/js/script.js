// Variables

let gameArr = [];
let playerArr = [];
let flash;
let correct;
let computerTurn;
let powerOn = false;
let sound = true;
let win;

const onSwitch = document.getElementById('onSwitch');
const soundToggle = document.getElementById('sound');
const startBtn = document.getElementById('start-btn');
const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const scoreCounter = document.getElementById('score');

// Event Listeners

onSwitch.addEventListener('change', function (e) {
  if (onSwitch.checked == true) {
    powerOn = true;
    scoreCounter.innerHTML = '-';
  } else {
    powerOn = false;
    scoreCounter.innerHTML = '';
    clear();
    // resetGame();
  }
});

// soundToggle.addEventListener('change', function (e) {
//   if (soundToggle === false) {
//     soundToggle = true;
//   } else if (soundToggle === true) {
//     soundToggle = false;
//   }
// });
startBtn.addEventListener('click', function (e) {
  if (powerOn) {
    startGame();
  }
});

// Functions

function startGame() {
  resetGame();
  //   Generate color order
  for (var i = 0; i < 20; i++) {
    gameArr.push(Math.floor(Math.random() * 4) + 1);
  }
  computerTurn = true;

  gameTurn();
}

function resetGame() {
  gameArr = [];
  playerArr = [];
  win = false;
  score = 1;
}

function gameTurn() {}

// function flash() {}
