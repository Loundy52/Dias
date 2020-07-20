// grabbing Html elements
//grabbing status in <"gameStatus">
const statusDiv = document.querySelector('.status');
// console.log(statusDiv) //console.log(statusDiv) to see if it shows. goodshows

//grabbing my reset in <"gameStatus"> to know if i can
const resetDiv = document.querySelector('.reset');
// console.log(resetDiv); //console.log(resetDiv) to see if show. we straight

//now how do i get the nine boxes called cells?
//think its same as document.querySelector()
//tried document.querySelector('.gridCellItem') 
//&& tried document.querySelectorAll('.gridCellItem')
//both does same so i went .querySelectorAll
//nm found out .querySelectorAll('.gridCellItem')
//"returns a nodelist of all the <div> element on page"
const boxCellDivs = document.querySelectorAll('.gridCellItem')
// console.log(boxCellDivs);//consoel.log(boxCellDivs); to see if show. we straight

//game variables
//learned to set up booleans
// to confirm if game start or not
let gameIsStart = true;
//want to alert user whos turn is it
let xYourUp = true;

let winner = null;

//functions 
const gameStatus = () => {
    const topLeft = cellDiv[0].classList[1]
    return topLeft;
    for(let x = 0; x <= ,)
}


//event handlers
const handleReset = () => {
    xYourUp = true;
    statusDiv.innerHTML = 'X you are up';
}
const checkGameStatus = () => {
    const topLeft = boxCellDivs[0].classList[2]
    const topMid = boxCellDivs[1].classList[2]
    const topRight = boxCellDivs[2].classList[2]
    const midLeft = boxCellDivs[3].classList[2]
    const midMid = boxCellDivs[4].classList[2]
    const midRight = boxCellDivs[5].classList[2]
    const bottomLeft = boxCellDivs[6].classList[2]
    const bottomMid = boxCellDivs[7].classList[2]
    const bottomRight = boxCellDivs[8].classList[2]
    // console.log(topLeft, topMid, topRight, midLeft, midMid, midRight, bottomLeft, bottomMid, bottomRight);
    if(topLeft && topLeft === topMid && topLeft ===topRight){
        gameIsStart = false;
        winner = topLeft; 
        statusDiv.innerHTML = topLeft + ' is the winner';
        return;
        
     } else if(midLeft && midLeft == midMid && midLeft === midRight){
        gameIsStart = false;
        winner = midLeft;
        statusDiv.innerHTML = midLeft + ' is the winner';
        return;

    } else if(bottomLeft && bottomLeft === bottomMid && bottomLeft === bottomRight){
        gameIsStart = false;
        winner = bottomLeft;
        statusDiv.innerHTML = bottomLeft + ' is the winner';
        return;

    } else if(topLeft && bottomLeft === midLeft && topLeft === bottomLeft){
        gameIsStart = false;
        winner = topLeft;
        statusDiv.innerHTML = topLeft + ' is the winner';
        return;

    } else if(topMid && bottomMid === midMid && topMid === bottomMid){
        gameIsStart = false;
        winner = topMid;
        statusDiv.innerHTML = topMid  + ' is the winner';
        return;

    } else if(topRight && bottomRight === midRight && topRight === bottomRight){
        gameIsStart = false;
        winner = topRight;
        statusDiv.innerHTML = topRight + ' is the winner';
        return;

    } else if(topLeft && bottomRight === midMid && topLeft === bottomRight){
        gameIsStart = false;
        winner = topLeft;
        statusDiv.innerHTML = topLeft + ' is the winner';
        return;

    } else if(topRight && bottomLeft === midMid && topRight == bottomLeft){
        gameIsStart = false;
        winner = topRight;
        statusDiv.innerHTML = topRight + ' is the winner';
        return;

    } else if(topLeft && topMid && topRight && midLeft && midMid && midRight && bottomLeft && bottomMid && bottomRight){
            gameIsStart = false;
            statusDiv.innerHTML = 'tie game, meow'
    } else {
        xYourUp == !xYourUp;
        if(xYourUp){
            statusDiv.innerHTML = 'X you are up';
        } else {
            statusDiv.innerHTML = 'O you are up';
        }
    }
    
    
}

//make my boxes click
const handleGridCellClick = (e) =>{
    // console.log(e.target.classList);
    const classList = e.target.classList;
    const location = classList[1];
    // console.log('location', location)

    if (classList[2] === 'X' || classList[2] === 'O') {
        return;// this where the function will end with the return
    }
    //otherwise do this 
    if (xYourUp === true) {
        // console.log(e.target);
        classList.add('X');
        xYourUp = !xYourUp;
        checkGameStatus()
    }else {
        classList.add('O')
        xYourUp = !xYourUp;
        checkGameStatus()
    }

};
//event listeners, make my stuff on the html be able to do things
//resetDiv.addEventListener('cick') rewrote for muscle memory
// this resetDiv.addEventListener('click') will listen for click and link to something
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of boxCellDivs){
    // console.log(cellDiv);
    cellDiv.addEventListener('click', handleGridCellClick)
}

