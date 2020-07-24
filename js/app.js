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
    buttonClicked = 0;
    let boxClicked = false;

    gameBoard.addEventListener('click', event => {
        
        let cell = event.target;//which cell was clicked on...set an attribute
           
              if(boxClicked == 0) {  
                if (turn % 2 == 0){
                    turn++;
                    cell.setAttribute('class', 'player1')
                    //look up attribute (TA mentioned to add this)
                    
                    cell.toggleAttribute('block');
                    switchOver.textContent = "Player 2 go!"
                   
                  
                    winState();
    
                    //tie();
    
                } else {
                    turn++;

                        cell.setAttribute('class', 'player2'); //look up attribute (TA mentioned to add this)
                        cell.toggleAttribute('block'); //which led to using toggle attribute. still need to look up to fuly grap
                  
                    switchOver.textContent = "Player 1, we don't have all day!";
                  
                    winState();
    
                    
                };
    
            }
    

        function winState() { //what is .className -> refresh is it a property calling to element.class
            let b1 = document.getElementById("block1"); //short names are best
            let b2 = document.getElementById("block2");
            let b3 = document.getElementById("block3");
            let b4 = document.getElementById("block4"); //tried className but no luck. try elementById?
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