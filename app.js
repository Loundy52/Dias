// HTML Elements
const statusDiv = document.querySelector('.status');
//console.log(statusDiv);
const resetDiv = document.querySelector('.reset');
//console.log(resetDiv);
//to enable 'click' function later
const cellDivs = document.querySelectorAll('.game-cell');
//grabbing the 9 cells we created on the index, grab all elements of .game-cell
//console.log(cellDivs);

// Game Constants
const xSymbol = 'x';
const oSymbol = '○';

// Game Variables 
let gameIsLive = true;
// if true, the game is live
// if false, the game is over or tied
let xNext = true;
// if true, it is x's turn
// if false, it is o's turn

// Functions
// get a letter ('x' or 'o')
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameIsLive = false;
        if (letter === 'x') {
            statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
        } else {
            statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
        }
};

const updateGameStatus = () => {
    const one = cellDivs[0].classList[1];
    const two = cellDivs[1].classList[1];
    const three = cellDivs[2].classList[1];
    const four = cellDivs[3].classList[1];
    const five = cellDivs[4].classList[1];
    const six = cellDivs[5].classList[1];
    const seven = cellDivs[6].classList[1];
    const eight = cellDivs[7].classList[1];
    const nine = cellDivs[8].classList[1];
    // console.log(one, two, three, four, five, six, seven, eight, nine);

    // Is there a winner?
    if (three && one === two && one === three) {
        handleWin(one);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    } else if (four && four === five && four === six) {
        handleWin(four);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    } else if (seven && seven === eight && eight === nine) {
        handleWin(seven);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (one && one === four && four === nine) {
        handleWin(one);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (two && two === five && five === eight) {
        handleWin(two);
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    } else if (three && three === six && six === nine) {
        handleWin(three);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (one && one === five && five === nine) {
        handleWin(one);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (three && three === five && five === seven) {
        handleWin(three);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (one && two && three && four && five && six && seven && eight && nine) {
        gameIsLive = false;
        statusDiv.innerHTML = 'Game is tied!';
    } else {
        xNext = !xNext;
        if (xNext) {
            statusDiv.innerHTML = `${xSymbol} is next`;
        } else {
            statusDiv.innerHTML = `${oSymbol} is next`;
        }
    }
};

// Event Handlers
const handleReset = () => {
    //console.log(event);
    xNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
  gameIsLive = true;
};

const handleCellClick = (event) => {
    //grab all the class lists from the beginning
    const classList = event.target.classList;
    //console.log(event.target.classList) or classList;
    //const location = classList[1];

    //test and check to see if element has an 'x' or an 'o'
    if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }

    if (xNext) {
        //console.log(event.target);
        classList.add('x');
        updateGameStatus();
    } else {
        classList.add('o');
        updateGameStatus();
    }
    //console.log("location", location);
};


// Event Listeners
resetDiv.addEventListener('click', handleReset);
//adding event listeners to the reset button, listening for 'click'

for(const cellDiv of cellDivs) {
    //console.log(cellDiv);
    //elements from the array will be stored within cellDiv
    cellDiv.addEventListener('click', handleCellClick)
}