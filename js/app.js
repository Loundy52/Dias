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
//document.addEventListener('DOMContentLoaded', startTitles);