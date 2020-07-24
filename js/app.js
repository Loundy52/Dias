let playerOne = 'x';
let playerTwo = 'o';
let turn = 0; //set back to zero remember to reinitialze everything 
let lastClicked;
let xMoves = [];// when someone click 012 on winning cobination 
let oMoves = [];// make sure to clear board and empty the arrays when the game is won
let gameEnd = false;
let gameBox = ''
let boxes = []
const gameBoard = document.querySelector('.gameBoard');
const status = document.getElementById('status')
//div board never going to change 
// when using queryselector use . or #
// console.log(gameBoard);
//will add class to item
// this is for a single class 
// gameBox.class = 'gridCellItem'
//this will take gamebox and stick it into game board

for(i = 0; i < 9; i++){
    //create element and a class and append 
    gameBox = document.createElement('div');
    gameBox.classList.add('gridCellItem');
    gameBox.id = i;
    gameBox.addEventListener('click', clickGameBox);
        // gameBox.removeEventListener('click', clickGameBox)
        // chosonle.log(clickGameBox)
    gameBoard.appendChild(gameBox);
        
  
    
    }



// the item turn thats clicked is the target 
//event.target.id you can do anything
//event.target.append
function clickGameBox(event){
    console.log('clicked')
    //if statment check if its the first turn it changes x or o
    //checking if turn equal zero because no one has played yet
   if(!gameEnd){

   
    if(turn % 2 === 0){
    event.target.innerText = (playerOne);
    lastClicked = playerOne;
    console.log(event.target.id)
    event.target.removeEventListener('click', clickGameBox)
    xMoves.push(Number(event.target.id))
    status.textContent = 'O your up next!'
    checkWin(xMoves)
    console.log(xMoves)


    } else {
        //check if last click is equal to player one
        if(lastClicked === playerOne) {
        event.target.innerText = playerTwo;
        lastClicked = playerTwo;
        console.log(lastClicked)
        event.target.removeEventListener('click', clickGameBox)
        oMoves.push(Number(event.target.id))
        status.textContent = 'X your up first!'
        checkWin(oMoves)
        console.log(oMoves)

        } else {
        event.target.innerText = playerOne;
        lastClicked = playerOne;
        console.log(lastClicked)
        event.target.removeEventListener('click', clickGameBox)
        xMoves.push(Number(event.target.id))
        status.textContent = 'O your up next!'
        checkWin(xMoves)
        console.log(xMoves)

    }
}
turn += 1;
//everytime we click game box we incriment game box 
//grab each element by those id's
//check the inner text save for each div save into different vairables
//document.getELementByIDcell id grab first before compare. 
   }
// event.target.innerText + playerTwo;
}
//once someone has 3 clicks on board check win

function checkWin(moves){
    // console.log(turn)
    var player = '';
    if(turn % 2 === 0){
        player = 'X'

    } else{
        player = 'O'
    }
    //first need x moves or o moves 
    // try switch statements later 
    // if x moves containes one of the win combinations
    // if x contains 012 horizontal win 
    if(moves.includes(0) && moves.includes(1) && moves.includes(2)){
       status.textContent = player + ' win'
       gameEnd = true;
        console.log('Top horizontal win' + '🐯')
        resetTheBoard()
     } else if(moves.includes(3) && moves.includes(4) && moves.includes(5)){
        status.textContent = player + ' win'  
        gameEnd = true;
        console.log('Mid horizontal win' + '🐯 ')
         resetTheBoard()
     } else if(moves.includes(6) && moves.includes(7) && moves.includes(8)){
        status.textContent = player + ' win'  
        gameEnd = true;
        console.log('Bot horizontal win' + '🐯')
         resetTheBoard()
     } else if(moves.includes(0) && moves.includes(3) && moves.includes(6)){
        status.textContent = player + ' win'  
        gameEnd = true;
        console.log('Topleft vertical win' + '🐧')
         resetTheBoard()
     } else if(moves.includes(1) && moves.includes(4) && moves.includes(7)){
        status.textContent = player + ' win'  
        gameEnd = true;
        console.log('TopMid veritcal win' + '🐧')
         resetTheBoard()
     } else if(moves.includes(2) && moves.includes(5) && moves.includes(8)){
        status.textContent = player + ' win'  
        gameEnd = true;
        console.log('TopRight vertical win' + '🐧')
         resetTheBoard()
     } else if(moves.includes(0) && moves.includes(4) && moves.includes(8)){
        status.textContent = player + ' win'  
        gameEnd = true;
        console.log('Topleft diagonal win' + '🐣')
         resetTheBoard()
     } else if(moves.includes(2) && moves.includes(4) && moves.includes(6)){
        status.textContent = player + ' win'  
        gameEnd = true;
        console.log('TopRight diagonal win' + '🐣')
         resetTheBoard()
     } else if(turn === 8){
         status.textContent = 'Cats Game Tie!'
         gameEnd = true;
         console.log('Tie Game' + ' 🐮')
         resetTheBoard()
     }

    // if it does then call reset game function 
    // continue if no one has won then cats game 

}
//reset game end back to false
//reset board back to bank 
//reset xMoves and oMoves
//set turns back to 0 zero
//set status.textContent back to x your up
function resetTheBoard(){

        setTimeout(function(){
            window.location.reload();

        }, 3000)
    
}

   

   
    //celone.textContent = empty string ''
    //clear the game board
    //reset all arrays and counters the turn counter
    
    
   




//once it alteranted compare who wins with combos
//winning combinations  cell0 ==
// function tell it one time what the code
//its like a variable storing code use that you tellig it waht you want ot use.

// in unit one really intill tic tac toe.

//another way to store witch dive stores letters 
//make an array when you click .shift takes out an array 
//how do you want to check to see if someone won. 
// try to take it bigger picture and break it down. 
// if i see your winning combos go through each winning combos does box one box two box three have names of winner x

//have to check win condition after each turn
// and not every div will be clicked after each turn.
//if the div class has player x in its x and vice verse for o
//we know we want to know if box1 box2 box3 all have the same class name 
//first step is grabbing each of these divs 

//how do you grab each of these and check their class name
//then once you have each of their class names and compare them

//maybe using loop to grab eahc of the id to find that elmement 
//document.getElement.byId(box1)
//document.getElement.byId(box2)
//sometimes i fyou can first figure out how to do it. 
//actually get it working and refactor it 
// if (boxOneClass == (boxTwoClass && boxOneClass)
//return true

//issue wrong winner shows up click one box winner is announced 

//make sure to check conditions for each winner through combos
//how to reset main game board
//  clicks reset the text content 
//the content of the boxes 
//and new game starts 

//create element where to acess from dom

// const resetGame = () =>{
//  xMoves = []
//  oMoves = []
//  winner = false;
//  document.getElementById('reset').textContent = ''
//     boxes.map(reset => {
//     console.log(reset)
// let box = document.getElementById(reset)
// box.textContent = ''
//     })
//  //reseting turns someone has won
//  //and reset all the boxes board back to blank
//  //and status result
 
// }
// //create call back that attatch to reset button
// reset.addEventListener('click', resetGame)
