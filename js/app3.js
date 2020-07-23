let moves = 1;
clicks = 0;
let gameMessage = document.querySelector('h2');
let squareIdArray = document.querySelectorAll('div.square');
let oMoves = []; // empty arrays to track game moves
let xMoves = [];
let victoryCounter = 0; 

const victorySquares = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // vertical
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // horizontal
    [0, 4, 8], [2, 4, 6] // diagonal
];

document.addEventListener('DOMContentLoaded', function() {    
    squareIdArray.forEach(function(element) {
        // add eventListener to each div.square
        element.addEventListener('click', function() {
            element.textContent = whoseMoveIsIt(element);
            clicks++;
        });
        
    });  
    
});

function whoseMoveIsIt(element) {
    moves++;
    let idInteger = parseInt(element.id);
    console.log(idInteger);
    // alternate between x's and o's
    // append player name to div class list
    // set element text content to x or o
    // display whose turn it is
    if (moves % 2 === 0 && moves < 10) {  //  x/o logic

        element.textContent = 'o'; 
        element.classList.add('playerO'); 
        gameMessage.textContent = 'It\'s X\'s Turn'; 
        oMoves.push(idInteger); // convert id string to int
        oMoves.sort(); // sort user move array
        console.log('o moves  ' + oMoves);
        victoryCheck(oMoves);
        
        
        
    } else {

        element.textContent = 'x';
        element.classList.add('playerX') // append player name to class list
        gameMessage.textContent = 'It\'s O\'s Turn';
        xMoves.push(idInteger);
        xMoves.sort();
        console.log('x moves: ' + xMoves);
        victoryCheck(xMoves);
        

    }

    
    return element.textContent; // must return element.textContent for move to appear
    
};

// tic tac toe victory logic to use later
// function victoryCheck(playerMoveArray) {
    

//     for (let i = 0; i < victorySquares.length; i++) { // loop through array of arrays of which there are 8
//         let victoryCounter = 0;
//             console.log('---------')
//             console.log('victory array: ' + victorySquares[i]);
//             console.log('player array: ' + playerMoveArray);
//             console.log('---------')

//         // only checking the first array before it returns false. need to check ALL arrays
//         // even against the correct player array, it still returns false
//         // for (let j = 0; j < playerMoveArray.length; j++) {
//         // if (playerMoveArray[j] === victorySquares[i][j]) { //this should be a for loop
//         if (playerMoveArray[i] === victorySquares[i]) { //this should be a for loop

//             victoryCounter++;
//             if (victoryCounter === 3) {
//                 console.log('BIG VICTORY');
//                 gameOver = true;
//                 setTimeout(resetGame, 1000);
                
//             } else if (clicks === 9 && gameOver === false) {
//                 gameMessage.textContent = 'CATS GAME';

//             }
            
//         } else {
//             // do something
//         }
     
//         }

//     }
// // };

// call indexOf on each win condition array 
// 



function victoryCheck(playerMoveArray) {

    for (let i = 0; i <= 7; i++) {
        let winCondition = victorySquares[i];
        console.log(winCondition[0]);
        
        if (playerMoveArray.includes(winCondition[0]) && playerMoveArray.includes(winCondition[1]) && playerMoveArray.includes(winCondition[2])) {
            gameMessage.textContent = 'YOU WIN';
            resetGame();
        }

        if (playerMoveArray.length === 5) {
            resetGame();
            gameMessage.textContent = 'CATS GAME';
        }
    
    } 
};

// iterate through player move arrays
// check if the values match one of the win conditions values
// 

function resetGame() {
    squareIdArray.forEach(function (element) {
        element.textContent = ' ';
        oMoves = [];
        xMoves = [];
        moves = 1;
    });
    
    
};

// function arraysMatch(victoryArray, playerArray) {
//     let squareTracker = 0;
//     // console.log(array1);
//     // console.log(array2);
//     for (let i = 0; i < victoryArray.length; i++) {
//         if (playerArray[i] === victoryArray[i]) {
//             // console.log('winner');
//             squareTracker++
            
//         }
//         // if (squareTracker === 3) {
//         //     console.log('vicotory!')
//         // }
//     }
    
    
// };