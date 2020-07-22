let moves = 1;
clicks = 0;
let gameMessage = document.querySelector('h2');
let squareIdArray = document.querySelectorAll('div.square');
let gameOver = false;
let oMoves = []; // empty arrays to track game moves
let xMoves = [];

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
        if (oMoves.length >= 3) {
            victoryCheck(oMoves);
        }
        
        // console.log(parseInt(element.id));

        
        
    } else {

        element.textContent = 'x';
        element.classList.add('playerX') // append player name to class list
        gameMessage.textContent = 'It\'s O\'s Turn';
        xMoves.push(idInteger);
        xMoves.sort();
        console.log('x moves: ' + xMoves);
        if (xMoves.length >= 3) {
            victoryCheck(xMoves);
        }

    }

    // reset move counter and gameMessage after 9 iterations
    // playerO logic to prevent fencepost error
    // if (moves === 10) { 
    //     element.textContent = 'o';
    //     element.classList.add('playerO');
    //     currentMove = 'o';
    //     gameMessage.textContent = 'Make a move!'; 
    //     gameOver = true;

    // if (gameOver === true) {
    //     moves = 1;
    //     gameOver = false;
    //     // window.confirm( 100, 'Play Again?');
    //     // setTimeout allows the css to update prior to the alert!
    //     window.setTimeout(window.confirm, 100, 'Play Again?');
    //     } 
        // moves = 1;
        // gameOver = true ties to potential play again logic. 
        // if that logic placed in this scope, last result will not update prior to alert.
        // as above, try coding it into the victory/catsgame logic
    // }  
    return element.textContent; // must return element.textContent for move to appear
    
};

// tic tac toe victory logic to use later
function victoryCheck(playerMoveArray) {
    const victorySquares = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // vertical
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // horizontal
        [0, 4, 8], [2, 4, 6] // diagonal
    ];
    
    // let victory = false;
    // let turnIdIntegers = parseInt(playerMoveArray[i])

    for (let i = 0; i < victorySquares.length; i++) { // loop through array of arrays of which there are 8
        let victoryCounter = 0;
            console.log('---------')
            console.log('victory array: ' + victorySquares[i]);
            console.log('player array: ' + playerMoveArray);
            console.log('---------')

        // only checking the first array before it returns false. need to check ALL arrays
        // even against the correct player array, it still returns false
        for (let j = 0; j < playerMoveArray.length; j++) {
            if (playerMoveArray[j] === victorySquares[i][j]) {
                // console.log('winner' + playerMoveArray[j]);
                victoryCounter++;
                if (victoryCounter === 3) {
                    console.log('BIG VICTORY');
                    
                    gameOver = true;
                    // gameMessage.textContent = 'Make a move!';
                    setTimeout(resetGame, 1000);
                    
                } else if (clicks === 9 && gameOver === false) {
                    gameMessage.textContent = 'CATS GAME';

                }
                
            } else {

            }
            // if (squareTracker === 3) {
            //     console.log('vicotory!')
            // }
        }

        // if (arraysMatch(victorySquares[i], playerMoveArray) === true);{
        //     return true;
        // }


        // if (victorySquares[i] === playerMoveArray) { // if o exists at [0][0], throw it in there
            
        //     console.log('SUCCESS!');
        //     victory = true;
        //     break;
        
        // } else {
        //     console.log('failure!');
        // }
    }
    // return victory;
};

function resetGame() {
    gameMessage.textContent = 'YOU WIN';
    squareIdArray.forEach(function (element) {
        element.textContent = ' ';
    });
    textContent = ' ';
    oMoves = [];
    xMoves = [];
    moves = 1;
    
}

function arraysMatch(victoryArray, playerArray) {
    let squareTracker = 0;
    // console.log(array1);
    // console.log(array2);
    for (let i = 0; i < victoryArray.length; i++) {
        if (playerArray[i] === victoryArray[i]) {
            // console.log('winner');
            squareTracker++
            
        }
        // if (squareTracker === 3) {
        //     console.log('vicotory!')
        // }
    }
    
    
};