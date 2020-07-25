// global variables
var turnCount = 1;
var boxArray = [];
let mainContainer;
let winner;
let reset;
var winnerIs = '' ;
let winCountX = 0;
let winCountY = 0;
let winCountTie = 0;


// run this function after document loaded
document.addEventListener('DOMContentLoaded', function() {
    //grabbing the elements from html
    mainContainer = document.querySelector('.container');
    winner = document.querySelector('h2');
    reset = document.querySelector('.button');
    
    for (let i=0; i<9 ; i++) {
        // gameStop();
        const boxes = document.createElement('div');
        boxes.classList.add('boxContainer');
        boxes.id = 'boxes' + i;
        //click event listener
        boxes.addEventListener('click', event => {
            gameStop();
            if (turnCount % 2 == true) { 
                if (boxes.textContent === 'X' || boxes.textContent === 'O' || winnerIs === 'X' || winnerIs === 'O') {
                    return;
                } else {
                    boxes.style.color = 'black';
                    boxes.textContent = 'X';
                    boxes.classList.add('x');
                    winner.textContent = 'O is Next';
                    winner.style.color = 'white';
                    boxArray[i]=boxes.textContent;
                    winnerCheck();
                    turnCount++;
                }
            } else {
                if (boxes.textContent === 'X' || boxes.textContent === 'O' || winnerIs === 'X' || winnerIs === 'O' ){
                    return;
                } else {
                    boxes.style.color = 'white';
                    boxes.textContent = 'O';
                    boxes.classList.add('o');
                    winner.textContent= 'X is Next';
                    winner.style.color = 'Black';
                    boxArray[i]=boxes.textContent;
                    winnerCheck();
                    turnCount++;
                }
            } 
        }); // End of event Listener
    mainContainer.appendChild(boxes);
       
        // resets the game
    reset.addEventListener('click', event => {
        if ( winnerIs === 'X') {
            i = 0;
            winner.innerHTML = 'Let\'s Play The Game! </br> O is First';
            winner.style.color = 'white';
        } else if(winnerIs === 'O'){
            i = 0;
            winner.innerHTML = 'Let\'s Play The Game! </br> X is First';
            winner.style.color = 'black';
        }
        boxArray = [];
        winnerIs = '';
        boxes.textContent = '';
    });

    } // End of for Loop

}); // DOM Content Loaded End

    function gameStop() {
        if(winnerIs === 'X'){
            winner.style.color = 'black';
            winCountX++;
            return; 
        } else if(winnerIs === 'O'){
            winner.style.color = 'white';
            winCountY++;
            return;
        }
    }

    function printWinCount() {
        var xCount = document.getElementById('x');
        var yCount = document.getElementById('o');
        var tieCount = document.getElementById('tie');

        xCount.textContent = winCountX;
        yCount.textContent = winCountY
        tieCount.textContent = winCountTie;
    }

    // function to stop the event when there is a winner
    function winnerCheck() {
        if (boxArray[0] && boxArray[0] === boxArray[1] && boxArray[1] === boxArray[2]) {
            winner.textContent = 'Winner is ' +boxArray[0];
            winnerIs = boxArray[0];
            gameStop();
            printWinCount();
        } else if(boxArray[0] && boxArray[0] === boxArray[4] && boxArray[4] === boxArray[8]) {
            winner.textContent = 'Winner is ' +boxArray[0];
            winnerIs = boxArray[0];
            gameStop();
            printWinCount();
        } else if(boxArray[0] && boxArray[0] === boxArray[3] && boxArray[3] === boxArray[6]) {
            winner.textContent = 'Winner is ' +boxArray[0];
            winnerIs = boxArray[0];
            gameStop();
            printWinCount();
        } else if(boxArray[1] && boxArray[1] === boxArray[4] && boxArray[4] === boxArray[7]) {
            winner.textContent = 'Winner is ' +boxArray[1];
            winnerIs = boxArray[1];
            gameStop();
            printWinCount();
        } else if(boxArray[2] && boxArray[2] === boxArray[5] && boxArray[5] === boxArray[8]) {
            winner.textContent = 'Winner is ' +boxArray[2];
            winnerIs = boxArray[2];
            gameStop();
            printWinCount();
        } else if(boxArray[2] && boxArray[2] === boxArray[4] && boxArray[4] === boxArray[6]) {
            winner.textContent = 'Winner is ' +boxArray[2];
            winnerIs = boxArray[2];
            gameStop();
            printWinCount();
        }else if(boxArray[3] && boxArray[3] == boxArray[4] && boxArray[4] === boxArray[5]) {
            winner.textContent = 'Winner is ' +boxArray[3];
            winnerIs = boxArray[3];
            gameStop();
            printWinCount();
        } else if(boxArray[6] && boxArray[6] === boxArray[7] && boxArray[7] === boxArray[8]) {
            winner.textContent = 'Winner is ' +boxArray[6];
            winnerIs = boxArray[6];
            gameStop();
            printWinCount();
        } else if(boxArray[0] && boxArray[1] && boxArray[2] && boxArray[3] && boxArray[4] && boxArray[5] && boxArray[6] && boxArray[7] && boxArray[8]){
            winner.innerHTML = 'Game has Tied! </br> Let\'s Play The Game Again!';
            winner.style.color = 'red';
            winCountTie++;
            printWinCount();
        }
    }
    
   


