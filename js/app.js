
//div board never going to change 
const gameBoard = document.querySelector('.gameBoard');
// console.log(gameBoard);
//will add class to item
// this is for a single class 
// gameBox.class = 'gridCellItem'
//this will take gamebox and stick it into game board

for(i = 0; i < 9; i++){
    //create element and a class and append 
    const gameBox = document.createElement('div');
    gameBox.classList.add('gridCellItem');
    gameBox.id = 'cell' + i;
    gameBox.addEventListener('click', clickGameBox);
    gameBoard.appendChild(gameBox);
}

function clickGameBox(event){
    event.target.innerText = 'x'
}

// the item thats clicked is the target 
//event.target.id you can do anything
//event.target.append