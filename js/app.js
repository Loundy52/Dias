document.addEventListener('DOMContentLoaded', function (){

// talk to your HTML

const gameBoard = document.querySelector('.div-board'); // all of the board is picked//const playersTurn = document.querySelector('.players-turn'); // will decide which player will go

const blockOne = document.getElementById("block1");
const blockTwo = document.getElementById("block2");
const blockThree = document.getElementById("block3");

const blockFour =  document.getElementById("block4");
const blockFive = document.getElementById("block5");
const blockSix = document.getElementById("block6");

const blockSeven = document.getElementById("block7");
const blockEight = document.getElementById("block8");
const blockNine = document.getElementById("block9");
const resetBtn = document.getElementById("btn"); //foreach option?


//is clicked a variable = true;
//

let turnCounter = 2;
const player1 = "X";
const player2 = "O";
//functions 


let boxOneClicked = false;
let checkWinner = 0;
function boxOne(){
    if (boxOneClicked == false){
        if (turnCounter%2 === 0){ //player
            blockOne.textContent = player1; //every other click does something different
            checkWinner === 1;
        } else {
            blockOne.textContent = player2; //every other click does something different
            checkWinner == 2;
        }
        turnCounter++;
    } 
    boxOneClicked = true;
    winningResults();
}

let boxTwoClicked = false;
function boxTwo(){
    if (boxTwoClicked == false){
        if (turnCounter%2 === 0){ //player
            blockTwo.textContent = player1; //every other click does something different
            checkWinner === 1;
        } else {
            blockTwo.textContent = player2; //every other click does something different
        }
        
        turnCounter++;
    }
    boxTwoClicked = true;
    winningResults();
}

let boxThreeClicked = false;
function boxThree(){
    if(boxThreeClicked == false){
        if (turnCounter%2 === 0){ //player
            blockThree.textContent = player1; //every other click does something different
            checkWinner === 1;
        } else {
            blockThree.textContent = player2; //every other click does something different
        }
        turnCounter++;
    }
     boxThreeClicked = true; 
     winningResults();
}


let boxFourClicked = false;
function boxFour(){
    if(boxFourClicked == false){
        if (turnCounter%2 === 0){ //player
            blockFour.textContent = player1; //every other click does something different
        } else {
            blockFour.textContent = player2; //every other click does something different
        }
        turnCounter++;    
    }
    boxFourClicked = true;
}
    
let boxFiveClicked = false;
function boxFive(){
    if(boxFiveClicked == false ){
        if (turnCounter%2 === 0){ //player
            blockFive.textContent = player1; //every other click does something different
        } else {
            blockFive.textContent = player2; //every other click does something different
        }
        turnCounter++;
    }
    boxFiveClicked = true;   
}

let boxSixClicked = false;
function boxSix(){
    if(boxSixClicked == false){
        if (turnCounter%2 === 0){ //player
            blockSix.textContent = player1; //every other click does something different
        } else {
            blockSix.textContent = player2; //every other click does something different
        }
        turnCounter++; 
    }
    boxSixClicked = true;
}

let boxSevenClicked = false;
function boxSeven(){
    if(boxSevenClicked == false){
        if (turnCounter%2 === 0){ //player
            blockSeven.textContent = player1; //every other click does something different
        } else {
            blockSeven.textContent = player2; //every other click does something different
        }
        turnCounter++; 
    }
       boxSevenClicked = true;
}


let boxEightClicked = false;
function boxEight(){
    if (boxEightClicked == false){
        if (turnCounter%2 === 0){ //player
            blockEight.textContent = player1; //every other click does something different
        } else {
            blockEight.textContent = player2; //every other click does something different
        }
        turnCounter++;
    }
       boxEightClicked = true; 
}

let boxNineClicked = false;
function boxNine(){
    if(boxNineClicked == false){
        if (turnCounter%2 === 0){ //player
            blockNine.textContent = player1; //every other click does something different
        } else {
            blockNine.textContent = player2; //every other click does something different
        }
        turnCounter++;   
    }
     boxNineClicked = true;
}

function resetButton(){
    location.reload();
}

// let one = document.querySelector("#block1");
// let two = document.querySelector("#block2");
// let three = document.querySelector("#block3");
// let four = document.querySelector("#block4");
// let five = document.querySelector("#block5");
// let six = document.querySelector("block6");
// let seven = document.querySelector("#block7");
// let eight = document.querySelector("#block8");
// let nine = document.querySelector("#block9");

// let row1 = blockOne, blockTwo, blockThree;
// let row2 = blockfour, blockFive, blockSix;
// let row3 = blockSeven, blockEight, blockNine;

function winningResults (){
    if (boxOne && boxTwo || boxThree === 1){
        console.log('winner');
    }
}







//upwin, upright

    blockOne.addEventListener("click", boxOne);
    blockTwo.addEventListener("click", boxTwo);    
    blockThree.addEventListener("click", boxThree);   
    blockFour.addEventListener("click", boxFour);
    blockFive.addEventListener("click", boxFive);
    blockSix.addEventListener("click", boxSix);
    blockSeven.addEventListener("click", boxSeven);  
    blockEight.addEventListener("click", boxEight);    
    blockNine.addEventListener("click", boxNine);
    resetBtn.addEventListener("click", resetButton);

});



// if topleft === topmid && topleft === topleft && topright != "box"
