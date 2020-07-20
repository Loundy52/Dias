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
        

        //result 
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
        else if(squares[0]&&squares[1]&&squares[2]&&squares[3]&&squares[4]&&squares[5]&&squares[6]&&squares[7]&&squares[8] != empty)
                resultM ("it's a tie")

            function resultM(result){
                let resultText = document.createElement('p');
                resultText.innerText = result;
                document.body.appendChild(resultText);
            }    
        }
    }    
)




    






























