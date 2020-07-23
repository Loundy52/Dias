const winningCombos = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

// basic arrow function syntax
// const someVar = (parameters) => doesThis

const grid = () => Array.from(document.getElementsByClassName('q'));
const qNumId = (qE1) =>  Number.parseInt(qE1.id.replace('q', '')); // qE1 or for every q element!
const emptyQs = () => grid().filter(_qE1 => _qE1.innerText==='');
const allSame = (array) => array.every(_qE1 => _qE1.innerText === array[0].innerText && _qE1.innerText !== '')

const takeTurn = (index, letter) => grid()[index].innerText = letter;
const opponentChoice = () => qNumId(emptyQs()[Math.floor(Math.random() * emptyQs().length)]) 




const endGame = () => { console.log('Game Over')}
const checkForVictory = () => {
    let victory = false;

    winningCombos.forEach(_c => {
        const grid = grid();
    })
    return victory;
}





const opponentTurn = () => {
    disableListeners();
    setTimeout(() => {  // pass a function
        takeTurn(opponentChoice(), 'o');
        if(!checkForVictory())    
            enableListeners();
    }, 1000);
}

const clickFunction = (event) => {
    takeTurn(qNumId(event.target), 'x');
    if (!checkForVictory()) // checkForVictory gets called immediately
        opponentTurn();
};

const enableListeners = () => grid().forEach(_qE1 => _qE1.addEventListener('click', clickFunction));
const disableListeners = () => grid().forEach(_qE1 => _qE1.removeEventListener('click', clickFunction));

enableListeners();

