// setting variables I might need

var container = document.getElementById('cont1');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
var div4 = document.getElementById('div4');
var div5 = document.getElementById('div5');
var div6 = document.getElementById('div6');
var div7 = document.getElementById('div7');
var div8 = document.getElementById('div8');
var div9 = document.getElementById('div9');
var xScore = document.getElementById('xScore');
var oScore = document.getElementById('oScore');
var button1 = document.getElementById('resetButton');
var cheBox = document.getElementById('boxChoice');
var insDiv = document.getElementsByClassName('insideDiv');

// making it so that everytime someone clicks on a div it starts the game, also setting reset and PC choice

document.getElementById('div1').addEventListener('click', clickDiv);
document.getElementById('div2').addEventListener('click', clickDiv);
document.getElementById('div3').addEventListener('click', clickDiv);
document.getElementById('div4').addEventListener('click', clickDiv);
document.getElementById('div5').addEventListener('click', clickDiv);
document.getElementById('div6').addEventListener('click', clickDiv);
document.getElementById('div7').addEventListener('click', clickDiv);
document.getElementById('div8').addEventListener('click', clickDiv);
document.getElementById('div9').addEventListener('click', clickDiv);
document.getElementById('restButton').addEventListener('click', resetBu);
document.getElementById('boxChoice').addEventListener('click', switch1);

// setting variables and lists I will need
var choClick = 0;
//var comChoice = comOrPla();
var winner = false;
var daX = []; //"box1" ,"box5", "box6", "box9"
var daO = []; // "box4" , "box8", "box3"
var timesClicked = 0
var winX = 0;
var winO = 0;
var compChoices = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9'];
var solutionArray = [['div1', 'div2', 'div3'], ['div4','div5', 'div6'],
                    ['div7', 'div8', 'div9'], ['div1', 'div4', 'div7'],
                    ['div2', 'div5', 'div8'], ['div3', 'div6', 'div9'],
                    ['div1', 'div5', 'div9'], ['div3', 'div5', 'div7']];

function switch1 () {
    choClick ++;
}
// function comOrPla () {
//     if (choClick%2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

function clickDiv(event) {
    // will only continue if there is not winner yet
    if (winner == false) {
        divSelected = event.currentTarget.id;
        console.log(divSelected);

    // making sure the div is empty
        if (daX.includes(divSelected) || daO.includes(divSelected)){
            console.log('Div already Selected');
         } else {

            //players turn
            if (timesClicked%2 == 0) {
                document.getElementById(divSelected).textContent += "x";
                daX.push(divSelected);
                var choiceIndex = compChoices.indexOf(divSelected);
                compChoices.splice(choiceIndex,1);
                console.log(daX);
                console.log(choClick);
                timesClicked ++;
                var win1 = solution(solutionArray, daX);

                //checking if player"x" won
                if (win1 == true) {
                    console.log('Player X won!');
                    //console.log(cheBox);
                    winX ++;
                    winnerX(winX);
                    winner = true;
                    console.log(winner);

                } else  {
                    itsDraw ();
                    if (choClick%2 == 0) {
                        //setInterval(againstComp, 1000);
                        setTimeout(() => {  againstComp(); }, 1000);
                        var win2 = solution(solutionArray, daO);
                        timesClicked ++;
                        console.log(daO);
                        //checking if "O" PC won
                        if (win2 == true) {
                            console.log('Player O won!');
                            winO ++;
                            winnerO(winO);
                            winner = true;
                            console.log(winner);

                            console.log(timesClicked);
                        }
                        else {
                            itsDraw ();
                            console.log("no winner O yet");
                        }
                        // after } will be player O turn
                    }

                }
                // after } is "O" turn
            } else {
                // checking if its PC turn
                if (choClick%2 == 1) {
                    document.getElementById(divSelected).textContent += "o";
                    daO.push(divSelected);
                    var win2 = solution(solutionArray, daO);
                    var choiceIndex2 = compChoices.indexOf(divSelected);
                    compChoices.splice(choiceIndex2,1);
                    timesClicked ++;
                    if (win2 == true) {
                        console.log('Player O won!');
                        winO ++;
                        winnerO(winO);
                        winner = true;
                        console.log(winner);

                        console.log(timesClicked);
                    } else {
                        itsDraw ();
                        console.log("No winner O yet");
                    }
                } else {
                        console.log(choClick);

                }
            }
        }
    }
}


function solution(sol1, array1) {
    for (var i = 0; i < sol1.length; i++) {
        var array2 = sol1[i];
        if (array1.includes(array2[0]) && array1.includes(array2[1]) && array1.includes(array2[2])) {
        return true;
    }
}
}

function winnerX(numb1) {
    var numb2 = "X Score: " +numb1;
    xScore.textContent = numb2;

}
function winnerO(numbO) {
    var numb3 = "O Score: " +numbO;
    oScore.textContent = numb3;

}
function resetBu () {
    winner = false;
    daX = [];
    daO = [];
    timesClicked = 0;
    div1.textContent = '';
    div2.textContent = '';
    div3.textContent = '';
    div4.textContent = '';
    div5.textContent = '';
    div6.textContent = '';
    div7.textContent = '';
    div8.textContent = '';
    div9.textContent = '';
    compChoices = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9'];

}

function againstComp () {
    numb1 = compChoices.length;  //8
    var choice = Math.floor(Math.random() * numb1);
    document.getElementById(compChoices[choice]).textContent += "o";
    var choiceIndex = choice;
    daO.push(compChoices[choice]);
    compChoices.splice(choiceIndex,1);
    console.log(choice+ " " +compChoices);
    console.log(daO);

}

function itsDraw () {
    var numb2 = compChoices.length;
    if (numb2 == 0) {
        window.alert("Its a Draw");
    }
    else {
        console.log("continue" +numb2);
    }
}


//setInterval(tick, 1000)




// // setting variables I might need

// var container = document.getElementById('cont1');
// var div1 = document.getElementById('div1');
// var div2 = document.getElementById('div2');
// var div3 = document.getElementById('div3');
// var div4 = document.getElementById('div4');
// var div5 = document.getElementById('div5');
// var div6 = document.getElementById('div6');
// var div7 = document.getElementById('div7');
// var div8 = document.getElementById('div8');
// var div9 = document.getElementById('div9');
// var xScore = document.getElementById('xScore');
// var oScore = document.getElementById('oScore');
// var button1 = document.getElementById('resetButton');
// var cheBox = document.getElementById('boxChoice');
// var insDiv = document.getElementsByClassName('insideDiv');

// // making it so that everytime someone clicks on a div it starts the game, also setting reset and PC choice

// document.getElementById('div1').addEventListener('click', clickDiv);
// document.getElementById('div2').addEventListener('click', clickDiv);
// document.getElementById('div3').addEventListener('click', clickDiv);
// document.getElementById('div4').addEventListener('click', clickDiv);
// document.getElementById('div5').addEventListener('click', clickDiv);
// document.getElementById('div6').addEventListener('click', clickDiv);
// document.getElementById('div7').addEventListener('click', clickDiv);
// document.getElementById('div8').addEventListener('click', clickDiv);
// document.getElementById('div9').addEventListener('click', clickDiv);
// document.getElementById('restButton').addEventListener('click', resetBu);
// document.getElementById('boxChoice').addEventListener('click', switch1);


// // setting variables and lists I will need
// var choClick = 0;
// var comChoice = comOrPla();
// var winner = false;
// var daX = [];
// var daO = [];
// var timesClicked = 0
// var winX = 0;
// var winO = 0;
// var compChoices = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9'];
// var solutionArray = [['div1', 'div2', 'div3'], ['div4','div5', 'div6'],
//                     ['div7', 'div8', 'div9'], ['div1', 'div4', 'div7'],
//                     ['div2', 'div5', 'div8'], ['div3', 'div6', 'div9'],
//                     ['div1', 'div5', 'div9'], ['div3', 'div5', 'div7']];

// function switch1 () {
//     choClick ++;
// }
// function comOrPla () {
//     if (choClick%2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function clickDiv(event) {
//     if (winner == false) {
//     divSelected = event.currentTarget.id; //div1
//     console.log(divSelected);

//     // making sure the div is empty
//     if (daX.includes(divSelected) || daO.includes(divSelected)){
//         console.log('Div already Selected');
//     } else {

//         if (timesClicked%2 == 0) {
//             document.getElementById(divSelected).textContent += "x";
//             daX.push(divSelected);
//             var choiceIndex = compChoices.indexOf(divSelected);
//             compChoices.splice(choiceIndex,1);
//             console.log(daX);
//             console.log(choClick);
//             timesClicked ++;
//             var win1 = solution(solutionArray, daX);

//                if (win1 == true) {
//                 console.log('Player X won!');
//                 console.log(cheBox);
//                 winX ++;
//                 winnerX(winX);
//                 winner = true;
//                 console.log(winner);

//             } else if (comChoice == true) {
//                     againstComp();
//                     var win2 = solution(solutionArray, daO);
//                     if (win2 == true) {
//                         console.log('Player O won!');
//                         winO ++;
//                         winnerO(winO);
//                         winner = true;
//                         console.log(winner);

//                     } else {
//                     console.log(timesClicked);
//                     }

//             } else {
//                 timesClicked ++;
//                 console.log(timesClicked);

//            }

//          } else {
//             document.getElementById(divSelected).textContent += "o";
//             daO.push(divSelected);
//             var win2 = solution(solutionArray, daO);
//             if (win2 == true) {
//                 console.log('Player O won!');
//                 winO ++;
//                 winner0(winO);
//                 winner = true;
//                 console.log(winner);

//             } else {
//                 timesClicked ++;
//                 console.log(timesClicked);

//            }
//     }
//     timesClicked ++;
//     console.log(timesClicked);
// }
// }
// }
// function solution(sol1, array1) {
//     for (var i = 0; i < sol1.length; i++) {
//         var array2 = sol1[i];
//    //array2 = ['div1, 'div2', 'div3']
//         if (array1.includes(array2[0]) && array1.includes(array2[1]) && array1.includes(array2[2])) {
//         return true;
//     }
// }
// return false;
// }

// function winnerX(numb1) {
//     var numb2 = "X Score: " +numb1;
//     xScore.textContent = numb2;

// }
// function winnerO(numb1) {
//     var numb3 = "0 Score: " +numb1;
//     oScore.textContent = numb3;


// }
// function resetBu () {
//     winner = false;
//     daX = [];
//     daO = [];
//     timesClicked = 0;
//     div1.textContent = '';
//     div2.textContent = '';
//     div3.textContent = '';
//     div4.textContent = '';
//     div5.textContent = '';
//     div6.textContent = '';
//     div7.textContent = '';
//     div8.textContent = '';
//     div9.textContent = '';
//     compChoices = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9'];

// }

// function againstComp () {
//     numb1 = compChoices.length;
//     var choice = Math.floor(Math.random() * numb1);
//     document.getElementById(compChoices[choice]).textContent += "o";
//     var choiceIndex = choice;
//     daO.push(compChoices[choiceIndex]);
//     compChoices.splice(choiceIndex,1);
//     console.log(choice+ " " +compChoices);

// }


// function itsDraw () {

//     if () {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// // pointer-events: none
// //element.style.backgroundColor = "red";
