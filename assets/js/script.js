// Variables
let powerOn = false;
let sound = true;
let gameArr = [];
let score = 0;
let computerTurn;
let flash;
let playerArr = [];
let correct;
let win;
let intervalId;

const onSwitch = document.getElementById('onSwitch');
const soundToggle = document.getElementById('sound');
const startBtn = document.getElementById('start-btn');
const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
let scoreCounter = document.getElementById('score');

// Event Listeners

onSwitch.addEventListener('change', function (e) {
  if (onSwitch.checked == true) {
    powerOn = true;
    scoreCounter.innerHTML = score;
  } else {
    powerOn = false;
    scoreCounter.innerHTML = '';
    clearColor();
    clearInterval(intervalId);
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
  intervalId = setInterval(gameTurn, 800);

  //   gameTurn();
}

function resetGame() {
  flash = 0;
  intervalId = 0;
  gameArr = [];
  playerArr = [];
  win = false;
  score = 1;
  scoreCounter = 1;
  correct = true;
}

function gameTurn() {
  powerOn = false;

  if (flash == score) {
    clearColor();
    computerTurn = false;
    on = true;
  }

  if (computerTurn) {
    clearColor();
    setTimeout(function () {
      if (gameArr[flash] == 1) one();
      if (gameArr[flash] == 2) two();
      if (gameArr[flash] == 3) three();
      if (gameArr[flash] == 4) four();
      flash++;
    }, 200);
  }
}

function one() {
  if (sound) {
    let audio = document.getElementById('clip1');
    audio.play();
  }
  sound = true;
  green.style.backgroundColor = 'lightgreen';
}
function two() {
  if (sound) {
    let audio = document.getElementById('clip2');
    audio.play();
  }
  sound = true;
  red.style.backgroundColor = 'tomato';
}
function three() {
  if (sound) {
    let audio = document.getElementById('clip3');
    audio.play();
  }
  sound = true;
  yellow.style.backgroundColor = 'goldenrod';
}
function four() {
  if (sound) {
    let audio = document.getElementById('clip4');
    audio.play();
  }
  sound = true;
  blue.style.backgroundColor = 'lightskyblue';
}

// Clear color

function clearColor() {
  green.style.backgroundColor = 'green';
  red.style.backgroundColor = 'red';
  yellow.style.backgroundColor = 'yellow';
  blue.style.backgroundColor = 'blue';
}

green.addEventListener('click', function () {
  if (powerOn) {
    playerArr.push(1);
    one();
    if (!win) {
      setTimeout(function () {
        clearColor();
      }, 300);
    }
  }
});

red.addEventListener('click', function () {
  if (powerOn) {
    playerArr.push(2);
    two();
    if (!win) {
      setTimeout(function () {
        clearColor();
      }, 300);
    }
  }
});

yellow.addEventListener('click', function () {
  if (powerOn) {
    playerArr.push(3);
    three();
    if (!win) {
      setTimeout(function () {
        clearColor();
      }, 300);
    }
  }
});

blue.addEventListener('click', function () {
  if (powerOn) {
    playerArr.push(4);
    four();
    if (!win) {
      setTimeout(function () {
        clearColor();
      }, 300);
    }
  }
});
// function flash() {}
