//check for win
//log click value in gameboard and change textcontent of square
//





function createGameboard() { //creates an array of all squares' logic
    var squares = document.querySelectorAll('p'),
        result = [];
    for (var i = 0; i < squares.length; i++) {
        result.push(squares[i].textContent);
    }
    return result;
};
//add event listener function to gameboard logging turn into textcontent.
//if text content is equal to x or o, 
turn = 0
const ex = "x"; //starting value of x
const oh = 'o'; //starting value of o
mark = ex;
document.getElementById('mainElement').addEventListener('click',
    function takeTurn (){
        let square = squares.findIndex(function(square) {
            return square === event.target;
        });
    
    });
document.getElementById('mainElement').addEventListener('click',
    function addTurn(){
        turn ++;
        if (turn%2 == 0){
            return oh;
        } else {
            return ex;
        }
    });
//toggleTurn();
// let squareContent = document.querySelectorAll("p").textContent;
// console.log(squareContent);
// const grid = Array.from(squareContent); //creates an array from the img elements in the html
// console.log(grid);
const messages = document.querySelector("h3"); //identifies where message will be made during game play
//document.getElementById('mainElement').addEventListener('click', handleTurn); //adds an event listener to the entire gameboard div

let win;
let gameboard;
let winningValues = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
[0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
[0, 4, 8], [2, 4, 6] //diagonals
];

function checkScore(){

}