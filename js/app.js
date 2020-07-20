
let boxOne = document.getElementById('up-left');
let boxTwo = document.getElementById('up-mid');
let boxThree = document.getElementById('up-right');
let boxFour = document.getElementById('mid-left');
let boxFive = document.getElementById('mid-mid');
let boxSix = document.getElementById('mid-right');
let boxSeven = document.getElementById('low-left');
let boxEight = document.getElementById('low-mid');
let boxNine = document.getElementById('low-right');
let body = document.querySelectorAll('body');
let displayTurn = document.querySelector("h2");

let checkTurn = 1;
const addO = "O";
const addX = "X";

function addMark(clickedBox) {
  if (checkTurn == 0) {
    clickedBox.innerHTML = addO;
    clickedBox.classList.add('player-two');
    checkTurn = 1;
    displayTurn.innerText = "Player One's Turn";
    this.removeEventListener('click', arguments.callee);
  } else if (checkTurn == 1) {
    clickedBox.innerHTML = addX;
    clickedBox.classList.add('player-one');
    checkTurn = 0;
    displayTurn.innerText = "Player Two's Turn";
    this.removeEventListener('click', arguments.callee);
  }
  winCondition();
}

boxOne.addEventListener('click', function (e) {
  console.log(e.target);
  addMark(e.target);
});

// boxOne.addEventListener('click', function(){
//   if (checkTurn == 0) {
//     boxOne.innerHTML = addO;
//     boxOne.classList.add('player-two');
//     checkTurn = 1;
//     displayTurn.innerText = "Player One's Turn";
//     this.removeEventListener('click', arguments.callee);
//   } else if (checkTurn == 1) {
//     boxOne.innerHTML = addX;
//     boxOne.classList.add('player-one');
//     checkTurn = 0;
//     displayTurn.innerText = "Player Two's Turn";
//     this.removeEventListener('click', arguments.callee);
//   }
//   winCondition();
// });

boxTwo.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxTwo.innerHTML = addO;
    boxTwo.classList.add('player-two');
    checkTurn = 1;
    this.removeEventListener('click', arguments.callee);
    displayTurn.innerText = "Player Two's Turn";

  } else if (checkTurn == 1) {
    boxTwo.innerHTML = addX;
    boxTwo.classList.add('player-one');
    checkTurn = 0;
    this.removeEventListener('click', arguments.callee);

    displayTurn.innerText = "Player One's Turn";
  }
  winCondition();
});
boxThree.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxThree.innerHTML = addO;
    boxThree.classList.add('player-two');
    checkTurn = 1;
    this.removeEventListener('click', arguments.callee);
  } else if (checkTurn == 1) {
    boxThree.innerHTML = addX;
    boxThree.classList.add('player-one');
    checkTurn = 0;
    this.removeEventListener('click', arguments.callee);
  }
  winCondition();
});
boxFour.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxFour.innerHTML = addO;
    boxFour.classList.add('player-two');
    checkTurn = 1;
    this.removeEventListener('click', arguments.callee);
  } else if (checkTurn == 1) {
    boxFour.innerHTML = addX;
    boxFour.classList.add('player-one');
    checkTurn = 0;
    this.removeEventListener('click', arguments.callee);
  }
  winCondition();
});
boxFive.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxFive.innerHTML = addO;
    boxFive.classList.add('player-two');
    checkTurn = 1;
    this.removeEventListener('click', arguments.callee);
  } else if (checkTurn == 1) {
    boxFive.innerHTML = addX;
    boxFive.classList.add('player-one');
    checkTurn = 0;
    this.removeEventListener('click', arguments.callee);
  }
  winCondition();
});
boxSix.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxSix.innerHTML = addO;
    boxSix.classList.add('player-two');
    checkTurn = 1;
    this.removeEventListener('click', arguments.callee);
  } else if (checkTurn == 1) {
    boxSix.innerHTML = addX;
    boxSix.classList.add('player-one');
    checkTurn = 0;
    this.removeEventListener('click', arguments.callee);
  }
  winCondition();
});
boxSeven.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxSeven.innerHTML = addO;
    boxSeven.classList.add('player-two');
    checkTurn = 1;
    this.removeEventListener('click', arguments.callee);
  } else if (checkTurn == 1) {
    boxSeven.innerHTML = addX;
    boxSeven.classList.add('player-one');
    checkTurn = 0;
    this.removeEventListener('click', arguments.callee);
  }
  winCondition();
});
boxEight.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxEight.innerHTML = addO;
    boxEight.classList.add('player-two');
    checkTurn = 1;
    this.removeEventListener('click', arguments.callee);
  } else if (checkTurn == 1) {
    boxEight.innerHTML = addX;
    boxEight.classList.add('player-one');
    checkTurn = 0;
    this.removeEventListener('click', arguments.callee);
  }
  winCondition();
});
boxNine.addEventListener('click', function () {
  if (checkTurn == 0) {
    boxNine.innerHTML = addO;
    boxNine.classList.add('player-two');
    checkTurn = 1;
    this.removeEventListener('click', arguments.callee);
  } else if (checkTurn == 1) {
    boxNine.innerHTML = addX;
    boxNine.classList.add('player-one');
    checkTurn = 0;
    this.removeEventListener('click', arguments.callee);
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
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    } else {
      displayTurn.innerText = "Player Two Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    }
  } else if (midLeft === midMid && midLeft === midRight && midRight != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    } else {
      displayTurn.innerText = "Player Two Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    }
  } else if (bottomLeft === bottomMid && bottomLeft === bottomRight && bottomRight != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    } else {
      displayTurn.innerText = "Player Two Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    }
  } else if (topLeft === midLeft && midLeft === bottomLeft && bottomLeft != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    } else {
      displayTurn.innerText = "Player Two Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    }
  } else if (topMid === midMid && midMid === bottomMid && bottomMid != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    } else {
      displayTurn.innerText = "Player Two Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    }
  } else if (topRight === midRight && midRight === bottomRight && bottomRight != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    } else {
      displayTurn.innerText = "Player Two Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    }
  } else if (topLeft === midMid && midMid === bottomRight && midMid != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    } else {
      displayTurn.innerText = "Player Two Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    }
  } else if (topRight === midMid && midMid === bottomLeft && topRight != "box") {
    if (checkTurn === 0) {
      displayTurn.innerText = "Player One Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    } else {
      displayTurn.innerText = "Player Two Won!";
      document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
    }
  } else if (topLeft != "box" && topMid != "box" && topRight != "box" && midLeft != "box" && midMid != "box" && midRight != "box" && bottomLeft != "box" && bottomMid != "box" && bottomRight != "box") {
    displayTurn.innerText = "It's a draw!";
    document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Reset</button>';
  }
}
