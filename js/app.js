var originalBoard;
const playerOne = 'x';
const playerTwo = 'o';
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const fields = document.querySelectorAll('.field');
startNewGame();

function startNewGame(){
    document.querySelector(".endContainer").style.display = "none";
    originalBoard = Array.from(Array(9).keys());
    for (var i = 0; i < fields.length; i++){
        fields[i].innerText = '';
        fields[i].addEventListener('click', eachClick, false);
    }
}

function eachClick(each){
    turn(each.target.id, playerOne);
}

function turn(eachId, player){
    originalBoard[eachId] = player;
    document.getElementById(eachId).innerText = player;
    let gameWon = checkWin(originalBoard, player);
    if (gameWon) gameOver(gameWon);
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winningCombos.entries()){
        if (win.every(elem => plays.indexOf(elem > -1))){
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;

}


 