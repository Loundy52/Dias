document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid-container div')
    const playerDisplay = document.querySelector('#player')
    const cellOne = document.querySelector('#one')
    const cellTwo = document.querySelector('#two')
    const cellThree = document.querySelector('#three')
    const cellFour = document.querySelector('#four')
    const cellFive = document.querySelector('#five')
    const cellSix = document.querySelector('#six')
    const cellSeven = document.querySelector('#seven')
    const cellEight = document.querySelector('#eight')
    const cellNine = document.querySelector('#nine')
    
    
    let currentPlayer = 'Player X'
    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
});


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
        //const playerX = document.querySelector('.playerX')
        //const playerO = document.querySelector('.playerO')
        const empty = null;
        
        if((squares[0]!== empty)&&(squares[0] == squares[1])&&(squares[1] == squares[2])){
            return 
            }else if ((squares[3]!== empty)&&(squares[3] == squares[4])&&(squares[4]== squares[5])){
                resultM ("You win!")
            }else if ((squares[6]!== empty)&&(squares[6] == squares[7])&&(squares[7]== squares[8])){
                resultM ("You win!")
            }else if ((squares[0]!== empty)&&(squares[0] == squares[3])&&(squares[3]== squares[6])){
                resultM ("You win!")
            }else if ((squares[1]!== empty)&&(squares[1] == squares[4])&&(squares[4]== squares[7])){
                resultM ("You win!")
            }else if((squares[2]!== empty)&&(squares[2] == squares[5])&&(squares[5]== squares[8])){
                resultM ("You win!")
            }
        else if(squares[0]&&squares[1]&&squares[2]&&squares[3]&&squares[4]&&squares[5]&&squares[6]&&squares[7]&&squares[8]== empty)
                resultM ("it's a tie")

            function resultM(result){
                const resultText = document.createElement('p');
                resultText.innerText = result;
                document.body.appendChild(resultText);
            }    
        }
    }    
)




    


//const gridContainer = document.getElementsByClassName('grid-container');
//console.log(gridContainer);




//console.log(red);



//const grid = [gridOne, gridTwo, gridThree, gridFour, gridFive, gridSix, gridSeven, gridEight, gridNine]

//const playerRed = 'red'
//const playerBlue = 'blue'

//let switchTurn

//grid.forEach(cell => {
//})

//function handleClick(e){
//    const cell = e.target
//    const currentTurn = switchTurn ? playerRed : playerBlue
//    displayInput(cell, currentTurn)
//    swapTurns()
//}
//
//function displayInput(cell,currentTurn){
//    cell.style.backgroundColor = 'red'
//}
//function swapTurns() {
//    switchTurn = !switchTurn
//}
//console.log(grid);

//function clickRed (){
//    this.style.backgroundColor = 'red';
//}
//function clickBlue (){
//    this.style.backgroundColor = 'blue';
//}



//displayInput(grid);

//keepGoing = 1
//while (keepGoing < 3){
//    grid.forEach(i => i.addEventListener('click', () => i.style.background = "red"))
 //   grid.forEach(i => i.addEventListener('click', () => i.style.background = "red")) 
 //   keepGoing++} 

 //grid[i].addEventListener('click', clickRed);
 //grid[i].addEventListener('click', clickBlue);


 //End Game

 //if(totalMove = 0) {
 //    return ("It's a tie!")
 //}else if{
 //    if(grid.column1 = click; )
 //    else if(grid.column2 = click; )
 //    else if(grid..column3 = click;)
 //}























