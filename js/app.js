//define the players and their symbol of choice
let player1 = "o";
let player2 = "x";

//this is the DOM part!!!
document.addEventListener("DOMContentLoaded", function(){
  //select each square on gameboard  
    let square1 = document.querySelector("#square1")
    let square2 = document.querySelector("#square2")
    let square3 = document.querySelector("#square3")
    let square4 = document.querySelector("#square4")
    let square5 = document.querySelector("#square5")
    let square6 = document.querySelector("#square6")
    let square7 = document.querySelector("#square7")
    let square8 = document.querySelector("#square8")
    let square9 = document.querySelector("#square9")

//function to switch player
let displayTurn = document.querySelector(".alert");
checkTurn = 1;

square1.addEventListener("click", function() {
    //alternating between different turns
    //o goes first
    if (checkTurn == 0) { 
        square1.textContent = player1; //inputs square 1 with o
        square1.classList.add("player2"); // adding a class to display the seperate players
        checkTurn = 1; //declares this is the first turm
        displayTurn.textContent = "Player1, it's your turn!";
    } else if (checkTurn == 1) { 
        square1.textContent = player2;
        square1.classList.add("player1");
        checkTurn = 0;
        displayTurn.innerText = "Player2, you're up!"
    } 
});

square2.addEventListener("click", function () {
    if (checkTurn == 0) {
        square2.textContent = player1;
        square2.classList.add("player2");
        checkTurn = 1;
        displayTurn.textContent = "Player1, it's your turn!";
    } else if (checkTurn == 1){
        square2.textContent = player2;
        square2.classList.add("player1");
        checkTurn = 0;
        displayTurn.textContent = "Player2, you're up!";
    } 
    
});

square3.addEventListener("click", function () {
    if (checkTurn == 0) {
        square3.textContent = player1;
        square3.classList.add("player2");
        checkTurn = 1;
        displayTurn.textContent = "Player1, it's your turn!";
    } else if (checkTurn == 1){
        square3.textContent = player2;
        square3.classList.add("player1");
        checkTurn = 0;
        displayTurn.textContent = "Player2, you're up!";
    } checkWin1();
   
});

square4.addEventListener("click", function () {
    if (checkTurn == 0) {
        square4.textContent = player1;
        square4.classList.add("player2");
        checkTurn = 1;
        displayTurn.textContent = "Player1, it's your turn!";
    } else if (checkTurn == 1){
        square3.textContent = player2;
        square3.classList.add("player1");
        checkTurn = 0;
        displayTurn.textContent = "Player2, you're up!";
    } checkWin1();
    
});

square5.addEventListener("click", function () {
    if (checkTurn == 0) {
        square5.textContent = player1;
        square5.classList.add("player2");
        checkTurn = 1;
        displayTurn.textContent = "Player1, it's your turn!";
    } else if (checkTurn == 1){
        square5.textContent = player2;
        square5.classList.add("player1");
        checkTurn = 0;
        displayTurn.textContent = "Player2, you're up!";
    } checkWin1();
    
});

square6.addEventListener("click", function () {
    if (checkTurn == 0) {
        square6.textContent = player1;
        square6.classList.add("player2");
        checkTurn = 1;
        displayTurn.textContent = "Player1, it's your turn!";
    } else if (checkTurn == 1){
        square6.textContent = player2;
        square6.classList.add("player1");
        checkTurn = 0;
        displayTurn.textContent = "Player2, you're up!";
    } checkWin1();
   
});

square7.addEventListener("click", function () {
    if (checkTurn == 0) {
        square7.textContent = player1;
        square7.classList.add("player2");
        checkTurn = 1;
        displayTurn.textContent = "Player1, it's your turn!";
    } else if (checkTurn == 1){
        square7.textContent = player2;
        square7.classList.add("player1");
        checkTurn = 0;
        displayTurn.textContent = "Player2, you're up!";
    } checkWin1();
    
});

square8.addEventListener("click", function () {
    if (checkTurn == 0) {
        square8.textContent = player1;
        square8.classList.add("player2");
        checkTurn = 1;
        displayTurn.textContent = "Player1, it's your turn!";
    } else if (checkTurn == 1){
        square8.textContent = player2;
        square8.classList.add("player1");
        checkTurn = 0;
        displayTurn.textContent = "Player2, you're up!";
    } 
   
});

square9.addEventListener("click", function () {
    if (checkTurn == 0) {
        square9.textContent = player1;
        square9.classList.add("player2");
        checkTurn = 1;
        displayTurn.textContent = "Player1, it's your turn!";
    } else if (checkTurn == 1){
        square9.textContent = player2;
        square9.classList.add("player1");
        checkTurn = 0;
        displayTurn.textContent = "Player2, you're up!";
    } checkWin1();
    
});

//checks for a winner??? 

let announceWinner = document.querySelector(".announceWinner");

function checkWin1() {
    let one = document.querySelector("#square1").className;
    let two = document.querySelector("#square2").className;
    let three = document.querySelector("#square3").className;
    let four = document.querySelector("#square4").className;
    let five = document.querySelector("#square5").className;
    let six = document.querySelector("#square6").className;
    let seven = document.querySelector("#square7").className;
    let eight = document.querySelector("#square8").className;
    let nine = document.querySelector("#square9").className;
    let announceWinner = document.querySelector(".announceWinner");

    if (one === player1 && one === player1 && two === player1) {
        if (checkTurn === 0) {
            announceWinner.innerText = "Player1 is the winner!";
        } else {
            announceWinner.innerText = "Player2 is the winner!";
        }
    } else if (four === player1 && five === player1 && four === player1) {
        if (checkTurn === 0) {
            announceWinner.innerText = "Player1 is the winner!";
        } else {
            announceWinner.innerText = "Player2 is the winner!";
        } 
    } else if (seven === eight && eight === nine && seven === nine) {
        if (checkTurn === 0) {
            announceWinner.innerText = "Player1 is the winner!";
        } else {
            announceWinner.innerText = "Player2 is the winner!";
        }
    }
}



});
//clears squares and player turn message
function clearAllSquares() {
    document.querySelector("#square1").textContent = " ";
    document.querySelector("#square2").textContent = " ";
    document.querySelector("#square3").textContent = " ";
    document.querySelector("#square4").textContent = " ";
    document.querySelector("#square5").textContent = " ";
    document.querySelector("#square6").textContent = " ";
    document.querySelector("#square7").textContent = " ";
    document.querySelector("#square8").textContent = " ";
    document.querySelector("#square9").textContent = " ";
    document.querySelector(".alert").textContent = " ";
    document.querySelector(".announceWinner").textContent = " ";
}
document.querySelector("button").addEventListener("click", clearAllSquares);
