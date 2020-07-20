let moves = 1;
let currentMove = '';
let oClickedSquareIds = [];
let xClickedSquareIds = [];


let gameMessage = document.querySelector('h2');
let squareIdArray = document.querySelectorAll('div.square');
let gameOver = null;

// main eventListener
document.addEventListener('DOMContentLoaded', function() {
    squareListeners();
    
    squareIdArray.forEach(function(element) {
        element.addEventListener('click', function() {
            console.log(element);
            element.classList.add('clicked');
            element.textContent = whoseMoveIsIt(element);
            checkForVictory();
        });
    });
    
});


// function checkResults (oResults, xResults){
//     let oResult = oResults.every()
// }

// most of the magic happens here 
function whoseMoveIsIt(element) {
    // add 1 to move counter
    moves++;
     // add element id to clickedSquares array

    // alternate between x's and o's
    if (moves % 2 === 0 && moves < 10) {  //  x/o logic

        element.classList.add('playerO');
        element.textContent = 'o'; 
        currentMove = 'o';
        gameMessage.textContent = 'It\'s X\'s Turn';

        console.log(element.id);
        console.log(oClickedSquareIds);
        
        
    } else {

        element.classList.add('playerX')
        element.textContent = 'x';
        currentMove = 'x';
        gameMessage.textContent = 'It\'s O\'s Turn';
        xClickedSquareIds.push(parseInt(element.id));
        console.log(xClickedSquareIds);
    }

    // reset move counter and gameMessage after 9 iterations
    // playerO logic to prevent fencepost error
    if (moves === 10) { 
        element.classList.add('playerO');
        element.textContent = 'o';
        currentMove = 'o';
        moves = 1;
        gameMessage.textContent = 'Make a move!'; 
        gameOver = true; 
        // gameOver = true ties to potential play again logic. 
        // if that logic placed in this scope, last result will not update prior to alert.
        // as above, try coding it into the victory/catsgame logic
    }  

    
    // console.log(moves);
    // console.log(currentMove);
    return element.textContent; // must return element.textContent for change to occur
    
};


// function checkWinner() {
//     let gameOver = false;
// }


//DECOMPOSE
// track user move spaces
// check user move spaces against winning combos

// function logMove(e){
// 	console.log(e);
// }
// squareIdArray.forEach(function(element) {
//     element.addEventListener('click', function() {
//         console.log(element);
//         element.classList.add('clicked');
//         element.textContent = whoseMoveIsIt(element);
//     }

function logMove(){
    click0 = true;

    checkForVictory();
}

let click0 = false;
let click1 = false;
let click2 = false;
let click3 = false;
let click4 = false;
let click5 = false;
let click6 = false;
let click7 = false;
let click8 = false;

const getSquare0 = document.getElementById('0');
const getSquare1 = document.getElementById('1');
const getSquare2 = document.getElementById('2');
const getSquare3 = document.getElementById('3');
const getSquare4 = document.getElementById('4');
const getSquare5 = document.getElementById('5');
const getSquare6 = document.getElementById('6');
const getSquare7 = document.getElementById('7');
const getSquare8 = document.getElementById('8');



function squareListeners() {
    getSquare0.addEventListener('click', function() {
        click0 = true;
        console.log(click0);
    });
    getSquare1.addEventListener('click', function() {
        click1 = true;
        console.log(click1);
    });
    getSquare2.addEventListener('click', function() {
        click2 = true;
        console.log(click2);
    });
    getSquare3.addEventListener('click', function() {
        click3 = true;
        console.log(click3);
    });
    getSquare4.addEventListener('click', function() {
        click4 = true;
        console.log(click4);
    });
    getSquare5.addEventListener('click', function() {
        click5 = true;
        console.log(click5);
    });
    getSquare6.addEventListener('click', function() {
        click6 = true;
        console.log(click6);
    });
    getSquare7.addEventListener('click', function() {
        click7 = true;
        console.log(click7);
    });
    getSquare8.addEventListener('click', function() {
        click8 = true;
        console.log(click8);
    });
};

function printWinner () {
    console.log('victory!')
            if (currentMove === 'o') {
                gameMessage.textContent = 'O Wins!';
            } else {
                gameMessage.textContent = 'X Wins!';
        }
    };

// I am ashamed of myself for this one.
// surely there is a better way to write this. 

function checkForVictory () {

    if (click0 === true && click1 === true && click2 === true) {
        printWinner()
    
    } else if (click3 === true && click4 === true && click5 === true) {
        console.log('victory!')
    
    } else if (click6 === true && click7 === true && click8 === true) {
        console.log('victory!')
    
    } else if (click0 === true && click3 === true && click6 === true) {
        console.log('victory!')
    
    } else if (click1 === true && click4 === true && click7 === true) {
        console.log('victory!')
    
    } else if (click2 === true && click5 === true && click8 === true) {
        console.log('victory!')
    
    } else if (click0 === true && click4 === true && click8 === true) {
        console.log('victory!')
    
    } else if (click2 === true && click4 === true && click6 === true) {
        console.log('victory!')
    
    }
};



// for (let i = 0; i < oSortArray.length; i++){
//     console.log(oSortArray[i]);
    
//     for (let j = 0; j < victoryArray.length; j++) {
        
//         if (oSortArray == victoryArray[j]) {
//             console.log('victory!!!')
        
//         } else {
//             console.log('no winner yet!')
//         }
//     }
// }