// Variables

let on = false;
let strict = false;
let generateGameColor = [];
let count = 0;
let computerTurn;
let flash;
let playerClickedColors = [];
let correct;
let win;
let intervalId;

// Select board elements

const onBtn = document.getElementById('onSwitch');
const strictBtn = document.getElementById('strict');
const startBtn = document.getElementById('start-btn');
const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const countTracker = document.getElementById('count');

// Event Listeners

// Power Button
onBtn.addEventListener('change', function () {
  if (onBtn.checked == true) {
    on = true;
  } else {
    on = false;
  }
});

// Segment event listeners
