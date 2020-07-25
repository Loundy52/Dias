document.addEventListener('DOMContentLoaded', function () {
    let gameBoard = document.querySelector('.div-board'); // all of the board is picked//const playersTurn = document.querySelector('.players-turn'); // will decide which player will go
    //console.log(gameBoard);

    switchOver = document.querySelector('.playersTurn'); //set your var
   

    const resetBtn = document.querySelector('.button');

    let player1 = [];
    let player2 = [];
    let winner = false;

    let b1 = document.getElementById("block1"); 
    let b2 = document.getElementById("block2");
    let b3 = document.getElementById("block3");
    let b4 = document.getElementById("block4"); 
    let b5 = document.getElementById("block5");
    let b6 = document.getElementById("block6");
    let b7 = document.getElementById("block7");
    let b8 = document.getElementById("block8");
    let b9 = document.getElementById("block9");


    let turn = 0;

    //let boxClicked = false;

    gameBoard.addEventListener('click', event => {

        let arrayCells = [
            [b1, b2, b3],
            [b4, b5, b6],
            [b7, b8, b9],
            [b1, b4, b7],
            [b2, b5, b8],
            [b3, b6, b9],
            [b1, b5, b9],
            [b3, b5, b7]
        ]


        let checkWinner = (arr) => {
            //call this function everytime someone clicks a box

            //push the box into player array on every click 

            //pass the array...checking all of the win options aginast the array (player 1 or player 2)
            if(arr.includes("block1") && arr.includes("block2") && arr.includes("block3")) {
                console.log('you win!');
                //call a reset function 
            } else if (arr.includes("block4") && arr.includes("block5") && arr.includes("block6")){
                console.log('you win!')
                //call reset function
            } else if (arr.includes("block7") && arr.includes("block8") && arr.includes("block9")) {
                console.log('you win!')
            } 
            
            // ...

            //if turns === 8 then its a tie!

}
        if (winner === false) {

    let cell = event.target;//which cell was clicked on...set an attribute  
    if (turn % 2 == 0) {
        
        cell.classList.add('player1')
        //console.log(cell);
        player1.push(cell.id);
        console.log(player1);
        cell.toggleAttribute('block');
        switchOver.textContent = "Player 2 go!"

        checkWinner(player1);
        // tie();
        turn++;
    } else {
        cell.classList.add('player2'); //look up attribute (TA mentioned to add this)
        player2.push(cell.id);
        //console.log(player2);

        cell.toggleAttribute('block'); //which led to using toggle attribute. still need to look up to fuly grap

        switchOver.textContent = "Player 1, we don't have all day!";
        checkWinner(player2);
        // tie();
        turn++;
    }

} else if (winner === true) {

    gameBoard.removeEventListener('click', event => {



    })

}






function tie() {
    if (turn > 9) {
        alert('Games a Draw');
    }
};


//set your button here
function resetButton() {
    location.reload();
}

    resetBtn.addEventListener("click", resetButton);


    })
});


//2 different arrays or on array for each player 
//you call a function check win 
//xMoves oMoves

// if xMoves includes 0,1,2 then return console.log('won');
//if its not true then else if xMoves 3 and xmoves has 5
//else if turns = 8 game is tied 








            // for (let i = 0; i < arrayCells.length; i++) {
            //     let playerX = [];
            //     let playerO = [];
            //     let arr2 = arrayCells[i];
            //     console.log(arr2);
            //     for (let j = 0; j < arr2.length; j++) {
            //         if (player1.includes(arr2[j])) {
            //            playerX.push(arr2[j]);
            //        } 
            //         if  (player2.includes(arr2[j])) {
            //              playerO.push(arr2[j])
            //        }
            //     }

            // } if (playerX.length === 3 || playerO.length === 3) {
                
            //     console.log('player ' + turn + ' wins')
            // } 