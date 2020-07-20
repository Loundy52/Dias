//defining all the square
let player1 = "o";
let player2 = "x";

//this is the DOM part!!!
document.addEventListener("DOMContentLoaded", function(){
    
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
const player1 = "o";
const player2 = "x";

square1.addEventListener("click", function() {
    //alternating between different turns
    //o goes first
    if (checkTurn == 0) {
        square1.textContent = player1;
        square1.classList.add("player2"); // adding a class to display the seperate players
        checkTurn = 1;
        displayTurn.textContent = "Player1, it's your turn!";
    } else if (checkTurn == 1) {
        square1.textContent = player2;
        square1.classList.add("player1");
        checkTurn = 0;
        displayTurn.innerText = "Player2, it's your turn!"
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
        displayTurn.textContent = "Player2, it's your turn!";
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
        displayTurn.textContent = "Player2, it's your turn!";
    }
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
        displayTurn.textContent = "Player2, it's your turn!";
    }
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
        displayTurn.textContent = "Player2, it's your turn!";
    }
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
        displayTurn.textContent = "Player2, it's your turn!";
    }
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
        displayTurn.textContent = "Player2, it's your turn!";
    }
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
        displayTurn.textContent = "Player2, it's your turn!";
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
        displayTurn.textContent = "Player2, it's your turn!";
    }
});

//checks for a winner
function checkWin(){
    if (square1.innerHTML === "o" &&
      square2.innerHTML === "o" &&
      square3.innerHTML === "o"
    ) { document.querySelector(".alert").textContent = "player1 wins!"}
    else if (
      square4.innerHTML === "o" &&
      square5.innerHTML === "o" &&
      square6.innerHTML === "o"
    ) { alert("Win")}
     else if (
      square7.innerHTML === "o" &&
      square8.innerHTML === "o" &&
      square9.innerHTML === "o"
    ) { alert("Win")} 
    else if (
        square3.innerHTML === "o" &&
        square5.innerHTML === "o" &&
        square7.innerHTML === "o"
      ) { alert("Win")} 
      else if (
        square1.innerHTML === "o" &&
        square5.innerHTML === "o" &&
        square9.innerHTML === "o"
      ) { alert("Win")} 
  }


//tells computer to wait for player turn to make a choice
});

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
}
document.querySelector("button").addEventListener("click", clearAllSquares);
