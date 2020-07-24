function createGameboard() { //creates an array of all squares' logic
    var squares = document.querySelectorAll('p'),
        result = [];
    for (var i = 0; i < squares.length; i++) {
        result.push(squares[i].textContent);
    }
    return result;
};


// let squareContent = document.querySelectorAll("p").textContent;
// console.log(squareContent);
// const grid = Array.from(squareContent); //creates an array from the img elements in the html
// console.log(grid);
const messages = document.querySelector("h3"); //identifies where message will be made during game play
//document.getElementById('mainElement').addEventListener('click', handleTurn); //adds an event listener to the entire gameboard div

const ex = "x"; //starting value of x
const oh = 'o'; //starting value of o
let turn = 'x'; //switches between the players, but starts with X
let win;
let gameboard;
let winningValues = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
[0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
[0, 4, 8], [2, 4, 6] //diagonals
];

function checkScore(){
    
}