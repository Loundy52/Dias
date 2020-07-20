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
startTitle(createSecond, 900);
startTitle(createThird, 1300);
startTitle(createFourth, 1700);

//Actual Assignment
//create game play 
//set event listeners for each square
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const ex = 'js/JonSnow.png';
const oh = 'js/NightWalker.png';
let mark = 'js/JonSnow.png';
let win;
let gameboard;

const grid = Array.from(document.querySelectorAll("img"));

const messages = document.querySelector("h3");
document.getElementById('mainElement').addEventListener('click', handleTurn);

//determine if a win happened

function score(){
let player = null;
winningCombos.forEach(function(combo, index){
    if (gameboard[combo[0]] && gameboard[combo[0]] === gameboard[combo[1]] && gameboard[combo[0]] === gameboard[combo[2]]) player = gameboard[combo[0]];
});
    return player ? player: gameboard.includes('') ? null : 'T';
};

//lot a turn's result

function handleTurn() {
    let idx = grid.findIndex(function(square) {
        return square === event.target;
    });
    gameboard[idx] = mark;
    mark = mark === ex ? oh : ex;
    win = score();
    play();
};

function start() {
    gameboard = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    play();
};

function play() {
    gameboard.forEach(function(mark, index) {
    console.log(mark, index)
    gameboard[index].textContent = mark;
    grid[index].src = mark;
    });
    messages.textContent = win === 'T' ? `Stalemate, wait for next season` : win ? `${win} wins the game!` : `It's ${mark}'s turn!`;
    };
start();
console.log(grid);
console.log(grid[2]);