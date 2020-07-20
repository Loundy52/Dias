let options = ["x", "o"];
let choice = options[0];

//collecting data on starting choice
//to see which box is clicked
if(document.querySelector('input[name="choice"]')) {
    document.querySelectorAll('input[name="choice"]').forEach((element) => {
    element.addEventListener("change", function(event) {
        let firstChoice = event.target.value;
        if (firstChoice === "0") {
            choice = options[0];
            console.log(options[0]);
            showWinner1.innerText = "turn: x";
            
        } 
        if (firstChoice === "1") {
            choice = options[1];
            console.log(options[1]);
            showWinner1.innerText = "turn: o";
        }
    });
    }); 
}

//if box 1 is clicked
const firstBox = document.getElementById("box1");
function chooseBox1(element) {
    containerOne = document.createElement("p");
    containerOne.classList.add("container");
    containerOne.setAttribute("id", "idOne");
    containerOne.innerText = choice;
    firstBox.appendChild(containerOne);
    element.target.removeEventListener(element.type, chooseBox1);
}
document.getElementById("box1").addEventListener('click', chooseBox1);

//if box 2 is clicked
const secondBox = document.getElementById("box2");
function chooseBox2(element) {
    const containerTwo = document.createElement("p");
    containerTwo.classList.add("container");
    containerTwo.setAttribute("id", "idTwo");
    containerTwo.innerText = choice;
    secondBox.appendChild(containerTwo);
    element.target.removeEventListener(element.type, chooseBox2);
}
document.getElementById("box2").addEventListener('click', chooseBox2);

//if box 3 is clicked
const thirdBox = document.getElementById("box3");
function chooseBox3(element) {
    const containerThree = document.createElement("p");
    containerThree.classList.add("container");
    containerThree.setAttribute("id", "idThree");
    containerThree.innerText = choice;
    thirdBox.appendChild(containerThree);
    element.target.removeEventListener(element.type, chooseBox3);
}
document.getElementById("box3").addEventListener('click', chooseBox3);

//if box 4 is clicked
const fourthBox = document.getElementById("box4");
function chooseBox4(element) {
    const containerFour = document.createElement("p");
    containerFour.classList.add("container");
    containerFour.setAttribute("id", "idFour");
    containerFour.innerText = choice;
    fourthBox.appendChild(containerFour);
    element.target.removeEventListener(element.type, chooseBox4);
}
document.getElementById("box4").addEventListener('click', chooseBox4);

//if box 5 is clicked
const fifthBox = document.getElementById("box5");
function chooseBox5(element) {
    const containerFive = document.createElement("p");
    containerFive.classList.add("container");
    containerFive.setAttribute("id", "idFive");
    containerFive.innerText = choice;
    fifthBox.appendChild(containerFive);
    element.target.removeEventListener(element.type, chooseBox5);
}
document.getElementById("box5").addEventListener('click', chooseBox5);

//if box 6 is clicked
const sixthBox = document.getElementById("box6");
function chooseBox6(element) {
    const containerSix = document.createElement("p");
    containerSix.classList.add("container");
    containerSix.setAttribute("id", "idSix");
    containerSix.innerText = choice;
    sixthBox.appendChild(containerSix);
    element.target.removeEventListener(element.type, chooseBox6);
}
document.getElementById("box6").addEventListener('click', chooseBox6);

//if box 7 is clicked
const seventhBox = document.getElementById("box7");
function chooseBox7(element) {
    const containerSeven = document.createElement("p");
    containerSeven.classList.add("container");
    containerSeven.setAttribute("id", "idSeven");
    containerSeven.innerText = choice;
    seventhBox.appendChild(containerSeven);
    element.target.removeEventListener(element.type, chooseBox7);
}
document.getElementById("box7").addEventListener('click', chooseBox7);

//if box 8 is clicked
const eigthBox = document.getElementById("box8");
function chooseBox8(element) {
    const containerEight = document.createElement("p");
    containerEight.classList.add("container");
    containerEight.setAttribute("id", "idEight");
    containerEight.innerText = choice;
    eigthBox.appendChild(containerEight);
    element.target.removeEventListener(element.type, chooseBox8);
}
document.getElementById("box8").addEventListener('click', chooseBox8);

//if box 9 is clicked
const ninthBox = document.getElementById("box9");
function chooseBox9(element) {
    const containerNine = document.createElement("p");
    containerNine.classList.add("container");
    containerNine.setAttribute("id", "idNine");
    containerNine.innerText = choice;
    ninthBox.appendChild(containerNine);
    element.target.removeEventListener(element.type, chooseBox9);
}
document.getElementById("box9").addEventListener('click', chooseBox9);

//resets the page
function resetPage(event) {
    let element = document.getElementsByClassName('container');
    for (let i = 0; i < element.length; i+9) {
        element[i].parentNode.removeChild(element[i]);
    }
    document.getElementById("myForm").reset();
}
document.getElementById("resetButton").addEventListener('click', resetPage);

//alternates piece
function alternatePiece(element) {  
    if(choice === options[0]) {
        for(let i = 0; i < options.length; i++) {
          choice = options[i];
        } 
    } else {
        for (let i = options.length; i>=0; i--) {
            choice = options[i]
        }
    }
}
document.getElementById("boxes").addEventListener('click', alternatePiece);

//shows whose turn it is
function alternateDisplay(element) {
    let showXOrO = document.getElementById("takeTurns");
    if(choice === options[0]) {
        showXOrO.innerText = "turn: x";
    }
    else {
        showXOrO.innerText = "turn: o";
    }
}
document.getElementById("boxes").addEventListener('click', alternateDisplay);

//how to win
let grid = {
   row1: ["1", "2", "3"],
   row2: ["4", "5", "6"],
   row3: ["7", "8", "9"]
};

//function to remove click listener when game is finished
function stopPlay(element) {
    document.getElementById("box1").removeEventListener('click', chooseBox1);
    document.getElementById("box2").removeEventListener('click', chooseBox2);
    document.getElementById("box3").removeEventListener('click', chooseBox3);
    document.getElementById("box4").removeEventListener('click', chooseBox4);
    document.getElementById("box5").removeEventListener('click', chooseBox5);
    document.getElementById("box6").removeEventListener('click', chooseBox6);
    document.getElementById("box7").removeEventListener('click', chooseBox7);
    document.getElementById("box8").removeEventListener('click', chooseBox8);
    document.getElementById("box9").removeEventListener('click', chooseBox9);
}

let showWinner1 = document.getElementById("takeTurns");

//win condition for row 1
function winCondition1 (element) {
    grid.row1[0] = document.getElementById("idOne");
    grid.row1[1] = document.getElementById("idTwo");
    grid.row1[2] = document.getElementById("idThree");

    if(grid.row1[0].textContent === "x" && grid.row1[1].textContent === "x" && grid.row1[2].textContent === "x") {
        showWinner1.innerText = "X WINS!";
        stopPlay();
        winCondition1 = true;
    }
    if(grid.row1[0].textContent === "o" && grid.row1[1].textContent === "o" && grid.row1[2].textContent === "o") {
        showWinner1.innerText = "O WINS!";
        stopPlay();
        winCondition1 = true;
    }
}
document.getElementById("boxes").addEventListener('click', winCondition1, grid);

//win condition for row 2
function winCondition2 (element) {
    grid.row2[0] = document.getElementById("idFour");
    grid.row2[1] = document.getElementById("idFive");
    grid.row2[2] = document.getElementById("idSix");
    
    if(grid.row2[0].textContent === "x" && grid.row2[1].textContent === "x" && grid.row2[2].textContent === "x") {
        showWinner1.innerText = "X WINS!";
        stopPlay();
        winCondition2 = true;
    }
    if(grid.row2[0].textContent === "o" && grid.row2[1].textContent === "o" && grid.row2[2].textContent === "o") {
        showWinner1.innerText = "O WINS!";
        stopPlay();
        winCondition2 = true;
    }
}
document.getElementById("boxes").addEventListener('click', winCondition2, grid);

//win condition for row 3
function winCondition3 (element) {
    grid.row3[0] = document.getElementById("idSeven");
    grid.row3[1] = document.getElementById("idEight");
    grid.row3[2] = document.getElementById("idNine");
    
    if(grid.row3[0].textContent === "x" && grid.row3[1].textContent === "x" && grid.row3[2].textContent === "x") {
        showWinner1.innerText = "X WINS!";
        stopPlay();
        winCondition3 = true;
    }
    if(grid.row3[0].textContent === "o" && grid.row3[1].textContent === "o" && grid.row3[2].textContent === "o") {
        showWinner1.innerText = "O WINS!";
        stopPlay();
        winCondition3 = true;
    }
}
document.getElementById("boxes").addEventListener('click', winCondition3, grid);

//win condition for column 1
function winCondition4 (element) {
    grid.row1[0] = document.getElementById("idOne");
    grid.row2[0] = document.getElementById("idFour");
    grid.row3[0] = document.getElementById("idSeven");

    if(grid.row1[0].textContent === "x" && grid.row2[0].textContent === "x" && grid.row3[0].textContent === "x") {
        showWinner1.innerText = "X WINS!";
        stopPlay();
        winCondition4 = true;
    }
    if(grid.row1[0].textContent === "o" && grid.row2[0].textContent === "o" && grid.row3[0].textContent === "o") {
        showWinner1.innerText = "O WINS!";
        stopPlay();
        winCondition4 = true;
    }
}
document.getElementById("boxes").addEventListener('click', winCondition4, grid);

//win condition for column 2
function winCondition5 (element) {
    grid.row1[1] = document.getElementById("idTwo");
    grid.row2[1] = document.getElementById("idFive");
    grid.row3[1] = document.getElementById("idEight");

    if(grid.row1[1].textContent === "x" && grid.row2[1].textContent === "x" && grid.row3[1].textContent === "x") {
        showWinner1.innerText = "X WINS!";
        stopPlay();
        winCondition5 = true;
    }
    if(grid.row1[1].textContent === "o" && grid.row2[1].textContent === "o" && grid.row3[1].textContent === "o") {
        showWinner1.innerText = "O WINS!";
        stopPlay();
        winCondition5 = true;
    }
}
document.getElementById("boxes").addEventListener('click', winCondition5, grid);

//win condition for column 3
function winCondition6 (element) {
    grid.row1[2] = document.getElementById("idThree");
    grid.row2[2] = document.getElementById("idSix");
    grid.row3[2] = document.getElementById("idNine");

    if(grid.row1[2].textContent === "x" && grid.row2[2].textContent === "x" && grid.row3[2].textContent === "x") {
        showWinner1.innerText = "X WINS!";
        stopPlay();
        winCondition6 = true;
    }
    if(grid.row1[2].textContent === "o" && grid.row2[2].textContent === "o" && grid.row3[2].textContent === "o") {
        showWinner1.innerText = "O WINS!";
        stopPlay();
        winCondition6 = true;
    }
}
document.getElementById("boxes").addEventListener('click', winCondition6, grid);

//win condition for diag 1
function winCondition7 (element) {
    grid.row1[0] = document.getElementById("idOne");
    grid.row2[1] = document.getElementById("idFive");
    grid.row3[2] = document.getElementById("idNine");

    if(grid.row1[0].textContent === "x" && grid.row2[1].textContent === "x" && grid.row3[2].textContent === "x") {
        showWinner1.innerText = "X WINS!";
        stopPlay();
        winCondition7 = true;
    }
    if(grid.row1[0].textContent === "o" && grid.row2[1].textContent === "o" && grid.row3[2].textContent === "o") {
        showWinner1.innerText = "O WINS!";
        stopPlay();
        winCondition7 = true;
    }
}
document.getElementById("boxes").addEventListener('click', winCondition7, grid);

//win condition for diag 2
function winCondition8 (element) {
    grid.row1[2] = document.getElementById("idThree");
    grid.row2[1] = document.getElementById("idFive");
    grid.row3[0] = document.getElementById("idSeven");

    if(grid.row1[2].textContent === "x" && grid.row2[1].textContent === "x" && grid.row3[0].textContent === "x") {
        showWinner1.innerText = "X WINS!";
        stopPlay();
        winCondition8 = true;
    }
    if(grid.row1[2].textContent === "o" && grid.row2[1].textContent === "o" && grid.row3[0].textContent === "o") {
        showWinner1.innerText = "O WINS!";
        stopPlay();
        winCondition8 = true;
    }
}
document.getElementById("boxes").addEventListener('click', winCondition8, grid);

function tieCondition (element) {
    grid.row1[0] = document.getElementById("idOne");
    grid.row1[1] = document.getElementById("idTwo");
    grid.row1[2] = document.getElementById("idThree");
    grid.row2[0] = document.getElementById("idFour");
    grid.row2[1] = document.getElementById("idFive");
    grid.row2[2] = document.getElementById("idSix");
    grid.row3[0] = document.getElementById("idSeven");
    grid.row3[1] = document.getElementById("idEight");
    grid.row3[2] = document.getElementById("idNine");

    if(winCondition1 != true && winCondition2 != true && winCondition3 != true 
        && winCondition4 != true && winCondition5 != true && winCondition6 != true 
         && winCondition7 != true && winCondition8 != true && grid.row1[0].textContent !== 'undefined'
         && grid.row1[1].textContent !== 'undefined'  && grid.row1[2].textContent !== 'undefined'
         && grid.row2[0].textContent !== 'undefined' && grid.row2[1].textContent !== 'undefined'  
         && grid.row2[2].textContent !== 'undefined' && grid.row3[0].textContent !== 'undefined'
         && grid.row3[1].textContent !== 'undefined'  && grid.row3[2].textContent !== 'undefined')  {
             showWinner1.innerText = "IT'S A TIE!"
    }
}
document.getElementById("boxes").addEventListener('click', tieCondition)