document.addEventListener('DOMContentLoaded', function () {

    // talk to your HTML
    // sadly start over :(
    let gameBoard = document.querySelector('.div-board'); // all of the board is picked//const playersTurn = document.querySelector('.players-turn'); // will decide which player will go
    //console.log(gameBoard);

    switchOver = document.querySelector('.playersTurn'); //set your var
    //console.log(switchOver);

    const resetBtn = document.querySelector('.button');

    let player1 = [];
    let player2 = [];
    let winner = false;

    let b1 = document.getElementById("block1"); //short names are best
    let b2 = document.getElementById("block2");
    let b3 = document.getElementById("block3");
    let b4 = document.getElementById("block4"); //tried className but no luck. try elementById?
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


        let checkWinner = () => {
            for (let i = 0; i < arrayCells.length; i++) {
                playerX = 0;
                let arr2 = arrayCells[i];

                for (let j = 0; j < arr2.length; j++) {
                    if (player1.includes(arr2[i][j])) {
                        player1++;

                    }

                }

            } if (player1 === 3) {
                alert("player 1 won");
                return true;
            }

    //     } else if (let i = 0; i < arrayCells.length i++) {
    //     playerO = 0;
    //     let arr3 = arrayCells[i];

    //     for (let j = 0; j < arr3.length; j++) {
    //         if (player2.includes(arr3[i][j]) {
    //             player2++;


    //         }
    //     }
    // }
    // if (player2 === 3) {
    //     alert("Player 2 won!");
    // }

}


        if (winner === false) {

    let cell = event.target;//which cell was clicked on...set an attribute  
    if (turn % 2 == 0) {
        turn++;
        cell.classList.add('player1')
        //look up attribute (TA mentioned to add this)
        //console.log(cell);
        player1.push(cell.id);
        //console.log(player1);
        cell.toggleAttribute('block');
        switchOver.textContent = "Player 2 go!"



        checkWinner();
        tie();

    } else {
        turn++;

        cell.classList.add('player2'); //look up attribute (TA mentioned to add this)
        player2.push(cell.id);
        //console.log(player2);

        cell.toggleAttribute('block'); //which led to using toggle attribute. still need to look up to fuly grap

        switchOver.textContent = "Player 1, we don't have all day!";
        checkWinner();
        tie();

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