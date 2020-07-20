
let boxOne = document.getElementById('up-left');
let boxTwo = document.getElementById('up-mid');
let boxThree = document.getElementById('up-right');
let boxFour = document.getElementById('mid-left');
let boxFive = document.getElementById('mid-mid');
let boxSix = document.getElementById('mid-right');
let boxSeven = document.getElementById('low-left');
let boxEight = document.getElementById('low-mid');
let boxNine = document.getElementById('low-right');

let displayTurn = document.querySelector("h2");

let checkTurn = 1;
const addO = "O";
const addX = "X";


boxOne.addEventListener('click', function(){
  if (checkTurn == 0) {
    boxOne.innerHTML = addO;
    boxOne.classList.add('player-two');
    checkTurn = 1;
    displayTurn.innerText = "Player One's Turn";
  } else if (checkTurn == 1) {
    boxOne.innerHTML = addX;
    boxOne.classList.add('player-one');
    checkTurn = 0;
    displayTurn.innerText = "Player Two's Turn";
  }
  winCondition();
});
boxTwo.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxTwo.innerHTML = addO;
    boxTwo.classList.add('player-two');
    checkTurn = 1;
  } else if (checkTurn == 1) {
    boxTwo.innerHTML = addX;
    boxTwo.classList.add('player-one');
    checkTurn = 0;
  }
  winCondition();
});
boxThree.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxThree.innerHTML = addO;
    boxThree.classList.add('player-two');
    checkTurn = 1;
  } else if (checkTurn == 1) {
    boxThree.innerHTML = addX;
    boxThree.classList.add('player-one');
    checkTurn = 0;
  }
  winCondition();
});
boxFour.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxFour.innerHTML = addO;
    boxFour.classList.add('player-two');
    checkTurn = 1;
  } else if (checkTurn == 1) {
    boxFour.innerHTML = addX;
    boxFour.classList.add('player-one');
    checkTurn = 0;
  }
  winCondition();
});
boxFive.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxFive.innerHTML = addO;
    boxFive.classList.add('player-two');
    checkTurn = 1;
  } else if (checkTurn == 1) {
    boxFive.innerHTML = addX;
    boxFive.classList.add('player-one');
    checkTurn = 0;
  }
  winCondition();
});
boxSix.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxSix.innerHTML = addO;
    boxSix.classList.add('player-two');
    checkTurn = 1;
  } else if (checkTurn == 1) {
    boxSix.innerHTML = addX;
    boxSix.classList.add('player-one');
    checkTurn = 0;
  }
  winCondition();
});
boxSeven.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxSeven.innerHTML = addO;
    boxSeven.classList.add('player-two');
    checkTurn = 1;
  } else if (checkTurn == 1) {
    boxSeven.innerHTML = addX;
    boxSeven.classList.add('player-one');
    checkTurn = 0;
  }
  winCondition();
});
boxEight.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxEight.innerHTML = addO;
    boxEight.classList.add('player-two');
    checkTurn = 1;
  } else if (checkTurn == 1) {
    boxEight.innerHTML = addX;
    boxEight.classList.add('player-one');
    checkTurn = 0;
  }
  winCondition();
});
boxNine.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxNine.innerHTML = addO;
    boxNine.classList.add('player-two');
    checkTurn = 1;
  } else if (checkTurn == 1) {
    boxNine.innerHTML = addX;
    boxNine.classList.add('player-one');
    checkTurn = 0;
  }
  winCondition();
});


function winCondition() {
  let topLeft = document.querySelector('#up-left').className;
  let topMid = document.querySelector('#up-mid').className;
  let topRight = document.querySelector('#up-right').className;
  let midLeft = document.querySelector('#mid-left').className;
  let midMid = document.querySelector('#mid-mid').className;
  let midRight = document.querySelector('#mid-right').className;
  let bottomLeft = document.querySelector('#low-left').className;
  let bottomMid = document.querySelector('#low-mid').className;
  let bottomRight = document.querySelector('#low-right').className;

  if(topLeft === topMid && topLeft === topRight && topRight != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
    } else {
      displayTurn.innerText = "Player Two Won!";
    }
  } else if (midLeft === midMid && midLeft === midRight && midRight != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
    } else {
      displayTurn.innerText = "Player Two Won!";
    }
  } else if (bottomLeft === bottomMid && bottomLeft === bottomRight && bottomRight != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
    } else {
      displayTurn.innerText = "Player Two Won!";
    }
  } else if (topLeft === midLeft && midLeft === bottomLeft && bottomLeft != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
    } else {
      displayTurn.innerText = "Player Two Won!";
    }
  } else if (topMid === midMid && midMid === bottomMid && bottomMid != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
    } else {
      displayTurn.innerText = "Player Two Won!";
    }
  } else if (topRight === midRight && midRight === bottomRight && bottomRight != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
    } else {
      displayTurn.innerText = "Player Two Won!";
    }
  } else if (topLeft === midMid && midMid === bottomRight && midMid != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
    } else {
      displayTurn.innerText = "Player Two Won!";
    }
  } else if (topRight === midMid && midMid === bottomLeft && topRight != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
    } else {
      displayTurn.innerText = "Player Two Won!";
  }
}
}
