
## Tic-tak-toe project

### Lists
1. Technologies
2. Requirements
3. Code snippet
4. Links



### Technologies 
1. HTML
2. javascript
3. CSS 

### Requirements
* A user should be able to click on different squares to make a move.
* Every click will alternate between marking an `X` and `O`
* Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
* Display a message to indicate which turn is about to be played.
* Detect draw conditions (ties/cat's game) 
* Detect winner: Stop game and declare the winner if one player ends up getting three in a row.  

### Code snippet 
 let currentPlayer = 'Player X'
    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    });
    
    ''' javascript
    function clickOutcome(e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer
        console.log(index);

        if(currentPlayer === 'Player X'){
            squares[index].classList.add('playerX')
            currentPlayer = 'Player O'
        } else {
            currentPlayer = 'Player X'
            squares[index].classList.add('playerO')
        }
    '''

This snippet of code shows that how 'O' and 'X' images displayed when a player clicks on each cell of the grid.  


## Link 
(file:///Users/aliceaekyunglee/Desktop/general_assembly/Unit1/homework/tik-tak-toe/index.html)


  




