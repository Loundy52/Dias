let moves = 1;
let gameMessage = document.querySelector('h2');
let squareIdArray = document.querySelectorAll('div.square');
let gameOver = false;


// main eventListener
// whoseMoveIsIt fires everytime an elem is clicked
document.addEventListener('DOMContentLoaded', function() {    
    squareIdArray.forEach(function(element) {

        // add eventListener to each div.square
        element.addEventListener('click', function() {
            console.log(element);
            element.textContent = whoseMoveIsIt(element);
            console.log(moves); 
            // squareListeners();
        });
        
    });  
    
});

// most of the logic happens here 
// all of this occurs on a click
function whoseMoveIsIt(element) {
    // add 1 to move counter
    moves++;

    // alternate between x's and o's
    // append player name to div class list
    // set element text content to x or o
    // display whose turn it is
    if (moves % 2 === 0 && moves < 10) {  //  x/o logic

        element.textContent = 'o'; 
        element.classList.add('playerO'); 
        gameMessage.textContent = 'It\'s X\'s Turn'; 
        console.log(element.id);
        // checkForVictory();

        
    } else {

        element.textContent = 'x';
        element.classList.add('playerX') // append player name to class list
        gameMessage.textContent = 'It\'s O\'s Turn';
        console.log(element.id);
        // checkForVictory();

    }

    // reset move counter and gameMessage after 9 iterations
    // playerO logic to prevent fencepost error
    if (moves === 10) { 
        element.textContent = 'o';
        element.classList.add('playerO');
        currentMove = 'o';
        gameMessage.textContent = 'Make a move!'; 
        gameOver = true;

    if (gameOver === true) {
        moves = 1;
        gameOver = false;
        // window.confirm( 100, 'Play Again?');
        // setTimeout allows the css to update prior to the alert!
        window.setTimeout(window.confirm, 100, 'Play Again?');
        } 
        // moves = 1;
        // gameOver = true ties to potential play again logic. 
        // if that logic placed in this scope, last result will not update prior to alert.
        // as above, try coding it into the victory/catsgame logic
    }  
    return element.textContent; // must return element.textContent for move to appear
    
};



// DONE click alternate between X and O (logic almost coded) 
// DONE add class to marked cells to display separate players
// DONE display message about which turn is being played
// DONE fix fencepost error
// DONE wrap line 10 event listener in DOMContentLoaded listener
// DONE reset game-board logic


// TODO devise victory logic
// TODO check for winner after each turn
// TODO detect draw conditions (ties)
// TODO detect winner with 3 in a row (determine set of winning combinations)
// TODO linethrough winner w/ alert message / ask to play again
// TODO catsgame alert conditions


// RESET GAME LOGIC
// squareIdArray.forEach(function (self) {
//     self.textContent = ' ';
//     return self;
// });

// POSSIBLE ENDGAME ALERT
// last move wont print if placed in eventListener scope.
// add to victory linethru/ catsgame logic

// if (gameOver === true) {
//     window.confirm('Play again?');
// };

// POSSIBLE VICTORY LOGIC
// add counters for each victory for each player
// if (xCounterLeft === 3 || xCounterMiddle === 3 || xCounterRight === 3) {
//      console.log('victory!');
// } else if (xCounterTop === 3 || xCounterCenter === 3 || xCounterBottom === 3) { 
//      console.log('victory!);
// } AND SO ON.... maybe a bit much. probably a better way....

// BROKEN OBJECT KEY CHECKER
// if (element.id in oMoveTracker){
//     oMoveTracker[element.id].key++;
//     console.log(true);
//     console.log(oMoveTracker);
//     return oMoveTracker;
// }else{
//     console.log('not found');
// }

// victory combo arrays

// const leftVictory = clickedSquareIds.includes('left-top', 'left-middle', 'left-bottom');
// clickedSquareIds.includes('center-top', 'center-middle', 'center-bottom');
// clickedSquareIds.includes('right-top', 'right-middle', 'right-bottom');

// if (leftVictory === true) {
//     console.log('victory!!')
// }

// function determineWinner() {
//     if (leftColumn.forEach() === 'o') {
//         gameMessage.textContent = 'O Wins!';
//         console.log('o wins!')
//     }
// };

// document.addEventListener('DOMContentLoaded', function() {
//     // if (moves % 2 === 0 && moves < 10) {  <- x/o logic
//         // square.textContent = 'o' 
//     // } else {
//         // square.textContent = 'x' 
//     // }

//     // add class to marked cess
//     // markedCell.setAttribute('class', 'x/o');


//     leftTop = document.getElementById('left-top');
//     leftTop.addEventListener('click', function(event) {
//         leftTop.textContent = 'o' 
//         console.log('o');
//         moves++;
//     });
// })


// CODE GRAVEYARD


// function checkResults (oResults, xResults){
//     let oResult = oResults.every()
// }


// function checkWinner() {
//     let gameOver = false;
// }

// function logMove(e){
// 	console.log(e);
// }
// squareIdArray.forEach(function(element) {
//     element.addEventListener('click', function() {
//         console.log(element);
//         element.classList.add('clicked');
//         element.textContent = whoseMoveIsIt(element);
//     }

// RIDICULOUSLY WET CODE

// function logMove(){
//     click0 = true;

//     checkForVictory();
// }

// let click0 = false;
// let click1 = false;
// let click2 = false;
// let click3 = false;
// let click4 = false;
// let click5 = false;
// let click6 = false;
// let click7 = false;
// let click8 = false;

// let playerClickedSquares = 
// []

// const getSquare0 = document.getElementById('0');
// const getSquare1 = document.getElementById('1');
// const getSquare2 = document.getElementById('2');
// const getSquare3 = document.getElementById('3');
// const getSquare4 = document.getElementById('4');
// const getSquare5 = document.getElementById('5');
// const getSquare6 = document.getElementById('6');
// const getSquare7 = document.getElementById('7');
// const getSquare8 = document.getElementById('8');



// let click0 = false;
// let click1 = false;
// let click2 = false;
// let click3 = false;
// let click4 = false;
// let click5 = false;
// let click6 = false;
// let click7 = false;
// let click8 = false;

// function squareListeners() {
//     getSquare0.addEventListener('click', function() {
//         click0 = true;
//         console.log(click0);
//     });
//     getSquare1.addEventListener('click', function() {
//         click1 = true;
//         console.log(click1);
//     });
//     getSquare2.addEventListener('click', function() {
//         click2 = true;
//         console.log(click2);
//     });
//     getSquare3.addEventListener('click', function() {
//         click3 = true;
//         console.log(click3);
//     });
//     getSquare4.addEventListener('click', function() {
//         click4 = true;
//         console.log(click4);
//     });
//     getSquare5.addEventListener('click', function() {
//         click5 = true;
//         console.log(click5);
//     });
//     getSquare6.addEventListener('click', function() {
//         click6 = true;
//         console.log(click6);
//     });
//     getSquare7.addEventListener('click', function() {
//         click7 = true;
//         console.log(click7);
//     });
//     getSquare8.addEventListener('click', function() {
//         click8 = true;
//         console.log(click8);
//     });
// };




// function printWinner () {
//     console.log('victory!')
//             if (currentMove === 'o') {
//                 gameMessage.textContent = 'O Wins!';
//             } else {
//                 gameMessage.textContent = 'X Wins!';
//         }
//     };

// // I am ashamed of myself for this one.
// // surely there is a better way to write this. 


// function checkForVictory () {

//     if ((click0 === true && click1 === true && click2 === true) || 
//         (click3 === true && click4 === true && click5 === true) ||
//         (click6 === true && click7 === true && click8 === true) ||
//         (click0 === true && click3 === true && click6 === true) ||
//         (click1 === true && click4 === true && click7 === true) ||
//         (click2 === true && click5 === true && click8 === true) ||
//         (click0 === true && click4 === true && click8 === true) ||
//         (click2 === true && click4 === true && click6 === true)) {
//             printWinner();
//         }
//     };
    

// this logic must be applied to each combination of
//for 
// function whoWonTheGame (element){

//     if (element.classList.contains('playerX')) {
//         console.log('x wins!');
//     } else if (element.classList.contains('playerO')) {
//         console.log('o wins!');
//     }

// function checkPlayerClass (player) {
//     if ((click0 === true && click1 === true && click2 === true) || 
//         (click3 === true && click4 === true && click5 === true) ||
//         (click6 === true && click7 === true && click8 === true) ||
//         (click0 === true && click3 === true && click6 === true) ||
//         (click1 === true && click4 === true && click7 === true) ||
//         (click2 === true && click5 === true && click8 === true) ||
//         (click0 === true && click4 === true && click8 === true) ||
//         (click2 === true && click4 === true && click6 === true)) {
            
//         }
// }

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