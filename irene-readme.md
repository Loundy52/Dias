# README - Tic Tac Toe - 
This is my 'Tic Tac Toe' project

# List of project:
1. Requirements
2. Code Snippet 

### Technologies
1. HTML
2. Javascript
3. CSS

### Requirements
* A user should be able to click on different squares to make a move.
* Every click will alternate between marking an `X` and `O`
* Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
* Display a message to indicate which turn is about to be played.
* Detect draw conditions (ties/cat's game) 
* Detect winner: Stop game and declare the winner if one player ends up getting three in a row. 

## CSS 
mmm
```CSS create cursor:pointer because need to give a pointer to this button. And, color of reset:hover can change while game is replay.
    .reset {
    cursor: pointer;
    font-size: 20px;
    background: aqua;
    position: absolute;
    height: 30px;
    width: 80px;
    text-align: center;
    
    }

    .reset:hover {
    color: royalblue
    }
```


## Javascrip - Code Snippet

1. Create an event handler to make every click marked by 'x' and 'o' and check status after marking.

```Javascript: 
 const handleCellClick = (e) => {
    const classList = e.target.classList;

    if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }

    if (xIsNext) {
        classList.add('x');
        checkGameStatus();
    } else {
        classList.add('o');
        checkGameStatus();
    }
};
```

2. Plug in event listener to execute all clicks needed.
```Javascript
    //event listeners adding to handle reset and cell click
    resetDiv.addEventListener('click', handleReset);


    for (const cellDiv of cellDivs) {
        cellDiv.addEventListener('click', handleCellClick)
    }

```

3. A function to check winner.
```Javascript
    const checkGameStatus = () => {
        const topLeft = cellDivs[0].classList[1];
        const topMiddle = cellDivs[1].classList[1];
        const topRight = cellDivs[2].classList[1];
        const middleLeft = cellDivs[3].classList[1];
        const middleMiddle = cellDivs[4].classList[1];
        const middleRight = cellDivs[5].classList[1];
        const bottomLeft = cellDivs[6].classList[1];
        const bottomMiddle = cellDivs[7].classList[1];
        const bottomRight = cellDivs[8].classList[1];
        
        //check winner
        if (topLeft && topLeft === topMiddle && topLeft === topRight) {
            handleWin(topLeft);
            cellDivs[0].classList.add('won');
            cellDivs[1].classList.add('won');
            cellDivs[2].classList.add('won');
        } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
            handleWin(middleLeft);
            cellDivs[3].classList.add('won');
            cellDivs[4].classList.add('won');
            cellDivs[5].classList.add('won'); 
        } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) { 
            handleWin(bottomLeft);
            cellDivs[6].classList.add('won');
            cellDivs[7].classList.add('won');
            cellDivs[8].classList.add('won');
        } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
            handleWin(topLeft);
            cellDivs[0].classList.add('won');
            cellDivs[3].classList.add('won');
            cellDivs[6].classList.add('won');
        } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
            handleWin(topMiddle);
            cellDivs[1].classList.add('won');
            cellDivs[4].classList.add('won');
            cellDivs[7].classList.add('won');
        } else if (topRight && topRight === middleRight && topRight === bottomRight) {
            handleWin(topRight);
            cellDivs[2].classList.add('won');
            cellDivs[5].classList.add('won');
            cellDivs[8].classList.add('won');
        } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
            handleWin(topLeft);
            cellDivs[0].classList.add('won');
            cellDivs[4].classList.add('won');
            cellDivs[8].classList.add('won');
        } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
            handleWin(topRight);
            cellDivs[2].classList.add('won');
            cellDivs[4].classList.add('won');
            cellDivs[6].classList.add('won');
        } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
            gameIsLive = false;
            statusDiv.innerHTML = 'Game is tied!';
        } else {
            xIsNext = !xIsNext;
            if (xIsNext) {
                statusDiv.innerHTML = `${xSymbol} is next`;
            } else {
                statusDiv.innerHTML = `${oSymbol} is next`;
            }
        }

    };

```

