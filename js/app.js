document.addEventListener('DOMContentLoaded', function (){

    // talk to your HTML
    // sadly start over :(
    let gameBoard = document.querySelector('.div-board'); // all of the board is picked//const playersTurn = document.querySelector('.players-turn'); // will decide which player will go
    console.log(gameBoard);
    
    switchOver = document.querySelector('.playersTurn'); //set your var
    console.log(switchOver);

    const resetBtn = document.querySelector('.button');
   
    const player1 = "X";
    const player2 = "O";
    //functions 
    let winner = false;
    let turn = 0;


    gameBoard.addEventListener('click', event => {
        
        //ifClicked = 0;

        let cell = event.target;//which cell was clicked on...set an attribute
        //console.log(event.target);
        if (cell.className == 'block'){

            if (turn % 2 == 0){
                turn++;
                cell.setAttribute('block', 'player1')
                cell.textContent = player1;//look up attribute (TA mentioned to add this)
                //icClicked = 1;
                cell.toggleAttribute('block', 'player1');
                switchOver.textContent = "Player 2 go!"
                //console.log(switchOver);

                winState();

                //tie();

            } else {
                turn++;
                cell.textContent = player2;
                //ifClicked = 1;
                cell.setAttribute('block', 'player2'); //look up attribute (TA mentioned to add this)
                cell.toggleAttribute('block'); //which led to using toggle attribute. still need to look up to fuly grap
                //console.log(cell);
                switchOver.textContent = "Player 1, we don't have all day!";

                winState();

                //tie();
            };


        }

        function winState() { //what is .className -> refresh is it a property calling to element.class
            let b1 = document.getElementById("block1"); //short names are best
            let b2 = document.getElementById("block2");
            //console.log(b2);
            let b3 = document.getElementById("block3");
            //console.log(b3);
            let b4 = document.getElementById("block4");
            let b5 = document.getElementById("block5");
            let b6 = document.getElementById("block6");
            let b7 = document.getElementById("block7");
            let b8 = document.getElementById("block8");
            let b9 = document.getElementById("block9");
    
    
    
        }
    
        //set your button here
        function resetButton(){
            location.reload();
        }
        
        resetBtn.addEventListener("click", resetButton);


    });
    


    
});