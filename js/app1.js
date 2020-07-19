let moves = 1;
let currentMove = '';
let oClickedSquareIds = [];
let xClickedSquareIds = [];
const victoryArray = 
[[0, 3, 6], [1, 4, 7], [2, 5, 8], // left to right
[0, 1, 2], [3, 4, 5], [6, 7, 8],  // up and down
[0, 4, 8], [2, 4, 6]] // diagonal 
// to match clickedSquareIds array, must run array.sort()

let gameMessage = document.querySelector('h2');
let squareIdArray = document.querySelectorAll('div.square');
let gameOver = null;

// main eventListener
document.addEventListener('DOMContentLoaded', function() {
    squareIdArray.forEach(function(element) {
        element.addEventListener('click', function() {
            console.log(element);
            element.classList.add('clicked');
            element.textContent = whoseMoveIsIt(element);
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
        oClickedSquareIds.push(parseInt(element.id)); // convert id # to int
        let oSortArray = oClickedSquareIds.sort(); // sort array from lowest to highest num
        for (let i = 0; i < oSortArray.length; i++){
            console.log(oSortArray[i]);
            
            for (let j = 0; j < victoryArray.length; j++) {
                
                if (oSortArray == victoryArray[j]) {
                    console.log('victory!!!')
                
                } else {
                    console.log('no winner yet!')
                }
            }
        }
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


function checkWinner() {
    let gameOver = false;
}