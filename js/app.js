// let xTurn= document.querySelector("#whoseTurn").createElement("h4");
//     xTurn.textContent= "X Turn";
// let oTurn= document.querySelector("#whoseTurn").createElement("h5");
//     oTurn.textContent= "O Turn";

const whoseTurn = document.querySelector("#whoseTurn");

const wins = [
    ["cell0", "cell3", "cell6"],
    ["cell1", "cell4", "cell7"],
    ["cell3", "cell5", "cell8"],
    ["cell0", "cell1", "cell2"],
    ["cell3", "cell4", "cell5"],
    ["cell6", "cell7", "cell8"],
    ["cell0", "cell4", "cell8"],
    ["cell2", "cell4", "cell6"]
];



const checkForWin = () => {

}

let clicks = 0;
whoseTurn.textContent = "X Turn";

const turns = (event) => {
    clicks ++;
    if (clicks % 2 !== 0) { 
        whoseTurn.textContent = "X Turn";
        event.target.textContent = "X";
        event.target.removeEventListener("click", turns);
    } else {
        whoseTurn.textContent = "O Turn";
        event.target.textContent = "O";
        event.target.removeEventListener("click", turns);
    }
}

// let winner = false;

// const reset = () => {
//     if (winner === true || )
// }

const gameBoard = document.querySelector(".gameBoard");
const jsBoxes = [];


// for loop iterates 9 times
for (let i = 0; i < 9; i++) {
    // create js divs
    let box = document.createElement("div");
    // assign each one a class of squares
    box.classList.add("squares");
    // and add an id of the index
    box.id = "cell" + i;
    // listen for the click and link it to turn count
    box.addEventListener("click", turns)
    // add new divs to the gameboard
    gameBoard.appendChild(box);
    jsBoxes.push(box);
}




// const getXs= document.querySelector(".topRow");
//     for (let i = 0; i < getXs.children.length; i++) {
//         console.log(getXs.children[i].tagName);
// }


// let win1= document.querySelector(".topRow");
// console.log(win1.length);


// let win2= document.querySelector(".midRow");
// let win3= document.querySelector(".botRow");
// let win4= document.querySelector(".leftCol");
// let win5= document.querySelector(".midCol");
// let win6= document.querySelector(".rightCol");
// let win7= document.querySelectorAll("#leftT #midM #rightB");
// let win8= document.querySelectorAll(".leftCol");

// let checkWin= function() {
    //     if () 
    // }
    
    
    


