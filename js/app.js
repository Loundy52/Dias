//Title construction
//identifies title elements from html 
const intro = document.querySelector("#intro")

const second = document.querySelector("#second")

const third = document.querySelector("#third")

const final = document.querySelector("#final")
//creates functions to add titles to elements
function createIntro () {
    intro.textContent = "Woah it's cold, almost like Winter's Coming.";
};
function createSecond () {
    second.textContent = "What's that beyond the wall?";
};
function createThird () {
    third.textContent = "Welp, time to call John Snow for an epic showdown.";
};
function createFourth () {
    final.textContent = "Oh, actually eight seasons were really just building up to tic-tac-toe.";
};
//sets timing to begin title sequences
function startTitle(create, time) {
    setInterval(create, time);
};

startTitle(createIntro, 500);
startTitle(createSecond, 1500);
startTitle(createThird, 2500);
startTitle(createFourth, 3000);

//Actual Assignment
//create game play 
//set event listeners for each square
//sets values for key concepts
const winningCombos = [ //I like how brent recorded these notes
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
    [0, 4, 8], [2, 4, 6] //diagonals
];

const ex = 'js/JonSnow.png';
const oh = 'js/NightWalker.png';
let mark = 'js/JonSnow.png';
let win;
let gameboard;

const grid = Array.from(document.querySelectorAll("p")); //creates an array from the img elements in the html

const messages = document.querySelector("h3"); //identifies where message will be made during game play
document.getElementById('mainElement').addEventListener('click', handleTurn); //adds an event listener to the entire gameboard div

//determine if a win happened

function score(){
    let player = null; //starts with an inner variable: also I couldn't remember where I found the tutorial so I rewrote all my code so that I could source correctly



    winningCombos.forEach(function(combo, index){ //runs the set of win scores in winningcombos against the win scores in the gameboard. If three elements are equal, logs the player which makes these values equal.
    if (gameboard[combo[0]] && gameboard[combo[0]] === gameboard[combo[1]] && gameboard[combo[0]] === gameboard[combo[2]]) player = gameboard[combo[0]];
    
    }); //ternary statement meant to replace if else statements.
    return (player ? player: //if player is true, returns player (as previous function would change to player if the board logs a winning sequence)
        gameboard.includes('') ? null  //if gameboard hasn't been completed, or has an empty returns null
        : 'T'); //"else" logs a T, which later will return a specific statement.
};


function handleTurn() { //sets three things for turn. adds the play, marks the score board, and changes the mark to the next player
    let idx = grid.findIndex(function(square) {
        return square === event.target;
    });
    gameboard[idx] = mark; //here I'm setting "mark" to be the value that indicates which player's turn it is. so that the gameboard index will have logged the img src identified.
    mark = mark === ex ? oh : ex; //logs as mark the source images above whenever called, but the tertary statement changes ex to oh or to ex. So we're just cycling through if X then make O if O then X.
    win = score(); //a win is identified by the score function. 
    play(); //calls the play function!
};

function start() { //creates a new gameboard that captures each play to run against the winning combos.
    gameboard = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    play();
};

function play() {
    gameboard.forEach(function(mark, index) { //brings it home. 
    console.log(mark, index) //unnecessary but checks if function is marking moves into the gameboard.
    gameboard[index].textContent = mark; //adds mark to the gameboard index during play
    grid[index].src = mark; //this is repetitive but I wanted to make sure it didn't mess up, it also logs mark as the src since mark is an image.
    });
    messages.textContent = win === 'T' ? `Stalemate, wait for next season` : win ? `${win} wins the game!` : `It's ${mark}'s turn!`;
    //tertray statement for if value of T log stalemate, else win logs that element (which is logged as the functional player. etc.)
};

start();