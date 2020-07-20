// Select HTML Elements
const status = document.querySelector('.status');
const reset = document.querySelector('.reset');
const game = document.querySelectorAll('.game');

 //game constants
const x = 'x';
const o = 'o'; 

// game variables
let gameIs = true;
let xTurn = true;


// functions for game winner
const letterToSymbol = (letter) => letter === 'x' ? x : o; 
/*ternary operator 'if-else statement'*/
/*1.condition lives in parentheses 2. value if true comes first 3.vale if false comes second*/

const getWinner = (letter) => {
  gameIs = false;
  if (letter === 'x') {
    status.innerHTML =  `${letterToSymbol(letter)} has won!`;
  } else {
    status.innerHTML = `${letterToSymbol(letter)} has won!`;
  }
};

const checkGameStatus = () => {
  const topLeft = game[0].classList[1];
  const topMiddle = game[1].classList[1];
  const topRight = game[2].classList[1];
  const middleLeft = game[3].classList[1];
  const middleMiddle = game[4].classList[1];
  const middleRight = game[5].classList[1];
  const bottomLeft = game[6].classList[1];
  const bottomMiddle = game[7].classList[1];
  const bottomRight = game[8].classList[1];

  // each player turns
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    getWinner(topLeft);
    game[0].classList.add('won');
    game[1].classList.add('won');
    game[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    getWinner(middleLeft);
    game[3].classList.add('won');
    game[4].classList.add('won');
    game[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    getWinner(bottomLeft);
    game[6].classList.add('won');
    game[7].classList.add('won');
    game[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    getWinner(topLeft);
    game[0].classList.add('won');
    game[3].classList.add('won');
    game[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    getWinner(topMiddle);
    game[1].classList.add('won');
    game[4].classList.add('won');
    game[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    getWinner(topRight);
    game[2].classList.add('won');
    game[5].classList.add('won');
    game[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    getWinner(topLeft);
    game[0].classList.add('won');
    game[4].classList.add('won');
    game[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    getWinner(topRight);
    game[2].classList.add('won');
    game[4].classList.add('won');
    game[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIs = false;
    status.innerHTML = 'Game is tied!';
  } else {
    xTurn = !xTurn;
    if (xTurn) {
      status.innerHTML = `${'x'} Turn`;
    } else {
      status.innerHTML = `${'o'} Turn`;
    }
  }
};


// function event Handlers
const getReset = () => {
  xTurn = true;
  status.innerHTML = `${'x'} Turn`;
  for (const gameOne of game) {
    gameOne.classList.remove('x');
    gameOne.classList.remove('o');
    gameOne.classList.remove('won');
  }
  gameIs = true;
};

const gameClick = (event) => {
  const classList = event.target.classList;

  if (!gameIs || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xTurn) {
    classList.add('x');
    checkGameStatus();
  } else {
    classList.add('o');
    checkGameStatus();
  }
};


// attach a click event handler
reset.addEventListener('click', getReset);

for (const gameOne of game) {
  gameOne.addEventListener('click', gameClick)
}