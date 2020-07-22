// let xTurn= document.querySelector("#whoseTurn").createElement("h4");
//     xTurn.textContent= "X Turn";
// let oTurn= document.querySelector("#whoseTurn").createElement("h5");
//     oTurn.textContent= "O Turn";

const whoseTurn = document.querySelector("#whoseTurn");

let clicks = 0;
whoseTurn.textContent = "X Turn";

const turns = (event) => {
    clicks += 1;
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

// for loop iterates 9 times

const gameBoard = document.querySelector(".gameBoard");
const jsBoxes = [];


for (let i = 0; i < 9; i++) {
    let box = document.createElement("div");
    box.classList.add("squares");
    box.id = "cell" + i;
    box.addEventListener("click", turns)
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
    
    
    


