// Variables
let on = false;
let turn;
let strict = false;
let playerColor = [];
let colors = [];
let flash;
let computerTurn;
let correct;
let win;
let intervalId;
let noise = true;

// Select board elements

const onBtn = document.getElementById('on-btn');
const strictBtn = document.getElementById('strict');
const startBtn = document.getElementById('start-btn');
const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
let countTracker = document.getElementById('count');

// Event Listeners

// Power Button, when clicked is true and changes count display
onBtn.addEventListener('change', function (e) {
  if (onBtn.checked == true) {
    on = true;
    countTracker.innerHTML = '-';
  } else {
    on = false;
    countTracker.innerHTML = '';
    clearColor();
    clearInterval(intervalId);
  }
});

// Strict button

strictBtn.addEventListener('change', function (e) {
  if (strictBtn.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});

// Start button

startBtn.addEventListener('click', function (e) {
  // If on or win play game.
  if (on || win) {
    playGame();
  }
});

green.addEventListener('click', function (e) {
  if (on) {
    playerColor.push(1);
    check();
    greenFlash();
    if (!win) {
      setTimeout(function () {
        clearColor();
      }, 300);
    }
  }
});
red.addEventListener('click', function (e) {
  if (on) {
    playerColor.push(2);
    check();
    redFlash();
    if (!win) {
      setTimeout(function () {
        clearColor();
      }, 300);
    }
  }
});
blue.addEventListener('click', function (e) {
  if (on) {
    playerColor.push(3);
    check();
    blueFlash();
    if (!win) {
      setTimeout(function () {
        clearColor();
      }, 300);
    }
  }
});
yellow.addEventListener('click', function (e) {
  if (on) {
    playerColor.push(4);
    check();
    yellowFlash();
    if (!win) {
      setTimeout(function () {
        clearColor();
      }, 300);
    }
  }
});

// Functions

// Play game function.

function playGame() {
  // Resest variables
  resetGame();
  // begin game turn
  gameTurn();
}

function resetGame() {
  win = false;
  turn = 1;
  colors = [];
  playerColor = [];
  flash = 0;
  correct = true;
  intervalId = 0;
  countTracker.innerHTML = 1;
  for (var i = 0; i < 20; i++) {
    colors.push(Math.floor(Math.random() * 4) + 1);
  }
  computerTurn = true;
  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    computerTurn = false;
    clearColor();
    on = true;
  }
  if (computerTurn) {
    clearColor();
    setTimeout(function () {
      if (colors[flash] == 1) greenFlash();
      if (colors[flash] == 2) redFlash();
      if (colors[flash] == 3) blueFlash();
      if (colors[flash] == 4) yellowFlash();
      flash++;
    }, 200);
  }
  // Flash the corosponding color in array
}

function clearColor() {
  green.style.backgroundColor = 'darkgreen';
  red.style.backgroundColor = 'darkred';
  blue.style.backgroundColor = 'darkblue';
  yellow.style.backgroundColor = 'goldenrod';
}

function flashColor() {
  green.style.backgroundColor = 'lightgreen';
  red.style.backgroundColor = 'tomato';
  blue.style.backgroundColor = 'lightskyblue';
  yellow.style.backgroundColor = 'yellow';
}

function greenFlash() {
  if (noise) {
    let clip1 = document.getElementById('clip1');
    clip1.play();
  }
  green.style.backgroundColor = 'lightgreen';
  noise = true;
}

function redFlash() {
  if (noise) {
    let clip2 = document.getElementById('clip2');
    clip2.play();
  }

  red.style.backgroundColor = 'red';
  noise = true;
}
function blueFlash() {
  if (noise) {
    let clip3 = document.getElementById('clip3');
    clip3.play();
  }
  blue.style.backgroundColor = 'lightskyblue';
  noise = true;
}

function yellowFlash() {
  if (noise) {
    let clip4 = document.getElementById('clip4');
    clip4.play();
  }
  yellow.style.backgroundColor = 'yellow';
  noise = true;
}

// Check color v player order

function check() {
  if (playerColor[playerColor.length - 1] !== colors[playerColor.length - 1])
    correct = false;

  if (playerColor.length == 20 && correct) {
    winGame();
  }

  if (correct == false) {
    flashColor();
    countTracker.innerHTML = 'NO!';
    setTimeout(function () {
      countTracker.innerHTML = turn;
      clearColor();
      if (strict == true) {
        playGame();
      } else {
        computerTurn = true;
        flash = 0;
        playerColor = [];
        correct = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);
    noise = false;
  }
  if (turn == playerColor.length && correct && !win) {
    turn++;
    playerColor = [];
    computerTurn = true;
    flash = 0;
    countTracker.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }
}
function winGame() {
  flashColor();
  countTracker.innerHTML = 'WIN!';
  on = false;
  win = true;
}
