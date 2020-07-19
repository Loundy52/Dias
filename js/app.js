// counter vars
let moves = 1;
let currentMove = '';


// get all elems with square class and set up an event listener
let gameMessage = document.querySelector('h2');
let squareIdArray = document.querySelectorAll('div.square');
squareIdArray.forEach(function(element) {
    element.addEventListener('click', function() {
        console.log(element);
        element.classList.add('clicked');
        element.textContent = whoseMoveIsIt(element);
    });
});

// DONE click alternate between X and O (logic almost coded) 
// DONE add class to marked cells to display separate players
// DONE display message about which turn is being played
// DONE fix fencepost error

// TODO wrap line 10 event listener in DOMContentLoaded listener
// TODO detect draw conditions (ties)
// TODO detect winner with 3 in a row (determine set of winning combinations)
// TODO linethrough winner w/ alert message / ask to play again
// TODO reset game-board

function whoseMoveIsIt (element) {
    // add 1 to move counter
    moves++;

    // alternate between x's and o's
    if (moves % 2 === 0 && moves < 10) {  //  x/o logic

        element.classList.add('playerO');
        element.textContent = 'o'; 
        currentMove = 'o';
        gameMessage.textContent = 'It\'s X\'s Turn';
        
    } else {

        element.classList.add('playerX')
        element.textContent = 'x';
        currentMove = 'x';
        gameMessage.textContent = 'It\'s O\'s Turn'
    }

    // reset move counter and gameMessage after 9 iterations
    // playerO logic to prevent fencepost error
    if (moves === 10) { 
        element.classList.add('playerO');
        element.textContent = 'o';
        currentMove = 'o';
        moves = 1;
        gameMessage.textContent = 'Make a move!'; 
    }

    console.log(moves);
    console.log(currentMove);
    return element.textContent; // must return element.textContent for change to occur
    
};

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