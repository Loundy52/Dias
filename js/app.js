// // variable for player
// var currentPlayer = "x";
// // identify button 1-9 with .getElementById
// function boxes() {

//     var b1 = document.getElementById("buttonOne");
//     var b2 = document.getElementById("buttonTwo");
//     var b3 = document.getElementById("buttonThree");
//     var b4 = document.getElementById("buttonFour");
//     var b5 = document.getElementById("buttonFive");
//     var b6 = document.getElementById("buttonSix");
//     var b7 = document.getElementById("buttonSeven");
//     var b8 = document.getElementById("buttonEight");
//     var b9 = document.getElementById("buttonNine");
//    // set all buttons with empty string 
//     b1.value="";
//     b2.value="";
//     b3.value="";
//     b4.value="";
//     b5.value="";
//     b6.value="";
//     b7.value="";
//     b8.value="";
//     b9.value="";
//     // set the box to be clickable with boolean
//     b1.disabled=false;
//     b2.disabled=false;
//     b3.disabled=false;
//     b4.disabled=false;
//     b5.disabled=false;
//     b6.disabled=false;
//     b7.disabled=false;
//     b8.disabled=false;
//     b9.disabled=false;
//     // hide endField with .visibility
//     document.getElementById("endField").style.visibility = "hidden";
//     document.getElementById("overlay").style.visibility = "hidden";
// }

// function disableButtons() {
// // restating this because it was above mentioned locally - not globally
//     var b1 = document.getElementById("td-one");
//     var b2 = document.getElementById("buttonTwo");
//     var b3 = document.getElementById("buttonThree");
//     var b4 = document.getElementById("buttonFour");
//     var b5 = document.getElementById("buttonFive");
//     var b6 = document.getElementById("buttonSix");
//     var b7 = document.getElementById("buttonSeven");
//     var b8 = document.getElementById("buttonEight");
//     var b9 = document.getElementById("buttonNine");
// // setting buttons to be unclickable after disableButtons function    
//     b1.disabled = true;
//     b2.disabled = true;
//     b3.disabled = true;
//     b4.disabled = true;
//     b5.disabled = true;
//     b6.disabled = true;
//     b7.disabled = true;
//     b8.disabled = true;
//     b9.disabled = true;
// }

// function showEndField(winner) {

//       disableButtons();
    
//       popuptext = document.getElementById("text");
//       popuptext.innerHTML = winner + " wins.";
    
//       var pop = document.getElementById("popup");
//       var overlay = document.getElementById("overlay");
//       pop.style.visibility = "visible";
//       overlay.style.visibility ="visible"
// }


// function lastCheck() {
//     var b1 = document.getElementById("td-one").value;
//     var b2 = document.getElementById("td-two").value;
//     var b3 = document.getElementById("td-three").value;
//     var b4 = document.getElementById("td-four").value;
//     var b5 = document.getElementById("td-five").value;
//     var b6 = document.getElementById("td-six").value;
//     var b7 = document.getElementById("td-seven").value;
//     var b8 = document.getElementById("td-eight").value;
//     var b9 = document.getElementById("td-nine").value;
    
    
//     if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
//         showEndField(b1);
//     } else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
//         showEndField(b1);
//     } else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
//         showEndField(b9);
//     } else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
//         showEndField(b9);
//     } else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
//         showEndField(b4);
//     } else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
//         showEndField(b2);
//     } else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
//         showEndField(b1);
//     } else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
//         showEndField(b7);
//     }

// }

// function replace(x, currentPlayer) {
//      if (x==1) {
//      var button = document.getElementById("buttonOne");
//      button.value = currentPlayer;
//      button.disabled=true;
//      }
//      else if (x==2) {
//      var button = document.getElementById("buttonTwo");
//      button.value = currentPlayer;
//      button.disabled=true;
//      }
//      else if (x==3) {
//      var button = document.getElementById("buttonThree");
//      button.value = currentPlayer;
//      button.disabled=true;
//      }
//      else if (x==4) {
//      var button = document.getElementById("buttonFour");
//      button.value = currentPlayer;
//      button.disabled=true;
//      }
//      else if (x==5) {
//      var button = document.getElementById("buttonFive");
//      button.value = currentPlayer;
//      button.disabled=true;
//      }
//      else if (x==6) {
//      var button = document.getElementById("buttonSix");
//      button.value = currentPlayer;
//      button.disabled=true;
//      }
//      else if (x==7) {
//      var button = document.getElementById("buttonSeven");
//      button.value = currentPlayer;
//      button.disabled=true;
//      }
//      else if (x==8) {
//      var button = document.getElementById("buttonEight");
//      button.value = currentPlayer;
//      button.disabled=true;
//      }
//      else if (x==9) {
//      var button = document.getElementById("buttonNine");
//      button.value = currentPlayer;
//      button.disabled=true;
//      }
//      lastCheck();
//      }
  

// function xORo(button) {
//     if (currentPlayer == "x") {
//     currentPlayer = "o";
//     replace(button, currentPlayer);
//     }
//     else if (currentPlayer == "o") {
//     currentPlayer = "x";
//     replace(button, currentPlayer);
//     }
//     }


    // check value of turn 
// var playersTurn = "x";
// var x = 1;
//         // let mark reflect that
    
//         // report who's turn it is
// function turnChange(){
//     if (playerTurn = "x"){
//         playerTurn = "o";
//         x += 1;
//     } else if (playerTurn = "o"){
//         playerTurn = "x";
//         x += 1;
//     }
// }
//     // switch between each player after turn is taken
    
//     // after turn check for win
//     function boxes() {

//         var b1 = document.getElementById("td-one");
//         var b2 = document.getElementById("td-two");
//         var b3 = document.getElementById("td-three");
//         var b4 = document.getElementById("td-four");
//         var b5 = document.getElementById("td-five");
//         var b6 = document.getElementById("td-six");
//         var b7 = document.getElementById("td-seven");
//         var b8 = document.getElementById("td-Eight");
//         var b9 = document.getElementById("td-nine");
//        // set all buttons with empty string 
//         b1.value="";
//         b2.value="";
//         b3.value="";
//         b4.value="";
//         b5.value="";
//         b6.value="";
//         b7.value="";
//         b8.value="";
//         b9.value="";
//         // set the box to be clickable with boolean
//         b1.disabled=false;
//         b2.disabled=false;
//         b3.disabled=false;
//         b4.disabled=false;
//         b5.disabled=false;
//         b6.disabled=false;
//         b7.disabled=false;
//         b8.disabled=false;
//         b9.disabled=false;
//         // hide endField with .visibility
//         // document.getElementById("endField").style.visibility = "hidden";
//         // document.getElementById("overlay").style.visibility = "hidden";
//     }
    
//     function replace(x, playersTurn) {
//         if (x==1) {
//         var button = document.getElementById("td-one");
//         button.value = playersTurn;
//         button.disabled=true;
//         }
//         else if (x==2) {
//         var button = document.getElementById("td-two");
//         button.value = playersTurn;
//         button.disabled=true;
//         }
//         else if (x==3) {
//         var button = document.getElementById("td-three");
//         button.value = playersTurn;
//         button.disabled=true;
//         }
//         else if (x==4) {
//         var button = document.getElementById("td-four");
//         button.value = playersTurn;
//         button.disabled=true;
//         }
//         else if (x==5) {
//         var button = document.getElementById("td-five");
//         button.value = playersTurn;
//         button.disabled=true;
//         }
//         else if (x==6) {
//         var button = document.getElementById("td-six");
//         button.value = playersTurn;
//         button.disabled=true;
//         }
//         else if (x==7) {
//         var button = document.getElementById("td-seven");
//         button.value = playersTurn;
//         button.disabled=true;
//         }
//         else if (x==8) {
//         var button = document.getElementById("td-eight");
//         button.value = playersTurn;
//         button.disabled=true;
//         }
//         else if (x==9) {
//         var button = document.getElementById("td-nine");
//         button.value = playersTurn;
//         button.disabled=true;
//         }
//         lastCheck();
//         }

    // function lastCheck() {
    //     var b1 = document.getElementById("td-one").value;
    //     var b2 = document.getElementById("td-two").value;
    //     var b3 = document.getElementById("td-three").value;
    //     var b4 = document.getElementById("td-four").value;
    //     var b5 = document.getElementById("td-five").value;
    //     var b6 = document.getElementById("td-six").value;
    //     var b7 = document.getElementById("td-seven").value;
    //     var b8 = document.getElementById("td-eight").value;
    //     var b9 = document.getElementById("td-nine").value;
    
    
    //     if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
    //         showEndField(b1);
    //     } else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
    //         showEndField(b1);
    //     } else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
    //         showEndField(b9);
    //     } else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
    //         showEndField(b9);
    //     } else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
    //         showEndField(b4);
    //     } else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
    //         showEndField(b2);
    //     } else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
    //         showEndField(b1);
    //     } else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
    //         showEndField(b7);
    //     }

    // }

//     //build endGame function

// function showEndField(winner) {

//     disableButtons();
  
//     popuptext = document.getElementById("text");
//     popuptext.innerHTML = winner + " wins.";
  
//     var pop = document.getElementById("endField");
//     // var overlay = document.getElementById("overlay");
//     pop.style.visibility = "visible";
//     // overlay.style.visibility ="visible"
// }

// function disableButtons() {
//     // restating this because it was above mentioned locally - not globally
//         var b1 = document.getElementById("td-one");
//         var b2 = document.getElementById("buttonTwo");
//         var b3 = document.getElementById("buttonThree");
//         var b4 = document.getElementById("buttonFour");
//         var b5 = document.getElementById("buttonFive");
//         var b6 = document.getElementById("buttonSix");
//         var b7 = document.getElementById("buttonSeven");
//         var b8 = document.getElementById("buttonEight");
//         var b9 = document.getElementById("buttonNine");
//     // setting buttons to be unclickable after disableButtons function    
//         b1.disabled = true;
//         b2.disabled = true;
//         b3.disabled = true;
//         b4.disabled = true;
//         b5.disabled = true;
//         b6.disabled = true;
//         b7.disabled = true;
//         b8.disabled = true;
//         b9.disabled = true;
//     }
        // (if) it is a win show endField
        // report who won

        //connect reset button

    //////////////////////////////////////////////////////////////
// var playersTurn = "x";
// var x = 1;

// var b1 = document.getElementById("td-one");
// var b2 = document.getElementById("td-two");
// var b3 = document.getElementById("td-three");
// var b4 = document.getElementById("td-four");
// var b5 = document.getElementById("td-five");
// var b6 = document.getElementById("td-six");
// var b7 = document.getElementById("td-seven");
// var b8 = document.getElementById("td-Eight");
// var b9 = document.getElementById("td-nine");

// // b1.value="";
// // b2.value="";
// // b3.value="";
// // b4.value="";
// // b5.value="";
// // b6.value="";
// // b7.value="";
// // b8.value="";
// // b9.value="";

// function turnChange(){
//     if (playerTurn = "x"){
//         playerTurn = "o";
//         x += 1;
//     } else if (playerTurn = "o"){
//         playerTurn = "x";
//         x += 1;
//     }
// }

// function disable(Button){
//     Button.target.id()
// }


// var currentPlayer = true;
let playerTurn = 1;

var winner = document.getElementById("text");



// endFieldButton.addEventListener('click', );

var b1 = document.getElementById("td-one");
var b2 = document.getElementById("td-two");
var b3 = document.getElementById("td-three");
var b4 = document.getElementById("td-four");
var b5 = document.getElementById("td-five");
var b6 = document.getElementById("td-six");
var b7 = document.getElementById("td-seven");
var b8 = document.getElementById("td-eight");
var b9 = document.getElementById("td-nine");

function listener(){
    b1.addEventListener('click', clickBox1);
    b2.addEventListener('click', clickBox2);
    b3.addEventListener('click', clickBox3);
    b4.addEventListener('click', clickBox4);
    b5.addEventListener('click', clickBox5);
    b6.addEventListener('click', clickBox6);
    b7.addEventListener('click', clickBox7);
    b8.addEventListener('click', clickBox8);
    b9.addEventListener('click', clickBox9);
}
listener();
// console.log(listener);

function clickBox1(){
    if (playerTurn % 2 === 0){
        b1.innerText = "X";
        playerTurn++;
        
    } else {
        b1.innerText = "O";
        playerTurn++;
        // currentPlayer = "X";
    }
    b1.removeEventListener("click", clickBox1);

    lastCheck();
}
function clickBox2(){
    if (playerTurn % 2 === 0){
        b2.innerText = "X";
        playerTurn++;
        
    } else {
        b2.innerText = "O";
        playerTurn++;
        // currentPlayer = "X";
    }
    b2.removeEventListener("click", clickBox2);

    lastCheck();
}
function clickBox3(){
    if (playerTurn % 2 === 0){
        b3.innerText = "X";
        playerTurn++;
        
    } else {
        b3.innerText = "O";
        playerTurn++;
        // currentPlayer = "X";
    }
    b3.removeEventListener("click", clickBox3);

    lastCheck();
}
function clickBox4(){
    if (playerTurn % 2 === 0){
        b4.innerText = "X";
        playerTurn++;
        
    } else {
        b4.innerText = "O";
        playerTurn++;
        // currentPlayer = "X";
    }
    b4.removeEventListener("click", clickBox4);

    lastCheck();
}
function clickBox5(){
    if (playerTurn % 2 === 0){
        b5.innerText = "X";
        playerTurn++;
        
    } else {
        b5.innerText = "O";
        playerTurn++;
        // currentPlayer = "X";
    }
    b5.removeEventListener("click", clickBox5);

    lastCheck();
}
function clickBox6(){
    if (playerTurn % 2 === 0){
        b6.innerText = "X";
        playerTurn++;
        
    } else {
        b6.innerText = "O";
        playerTurn++;
        // currentPlayer = "X";
    }
    b6.removeEventListener("click", clickBox6);

    lastCheck();
}
function clickBox7(){
    if (playerTurn % 2 === 0){
        b7.innerText = "X";
        playerTurn++;
        
    } else {
        b7.innerText = "O";
        playerTurn++;
        // currentPlayer = "X";
    }
    b7.removeEventListener("click", clickBox7);

    lastCheck();
}
function clickBox8(){
    if (playerTurn % 2 === 0){
        b8.innerText = "X";
        playerTurn++;
        
    } else {
        b8.innerText = "O";
        playerTurn++;
        // currentPlayer = "X";
    }
    b8.removeEventListener("click", clickBox8);

    lastCheck();
}
function clickBox9(){
    if (playerTurn % 2 === 0){
        b9.innerText = "X";
        playerTurn++;
        
    } else {
        b9.innerText = "O";
        playerTurn++;
        // currentPlayer = "X";
    }
    
    b9.removeEventListener("click", clickBox9);

    lastCheck();
    
}

function lastCheck() {
    var B1 = document.getElementById("td-one").textContent;
    var B2 = document.getElementById("td-two").textContent;
    var B3 = document.getElementById("td-three").textContent;
    var B4 = document.getElementById("td-four").textContent;
    var B5 = document.getElementById("td-five").textContent;
    var B6 = document.getElementById("td-six").textContent;
    var B7 = document.getElementById("td-seven").textContent;
    var B8 = document.getElementById("td-eight").textContent;
    var B9 = document.getElementById("td-nine").textContent;


    if (((B1=="X") || (B1=="O")) && ((B1 == B2) && (B2 == B3))) {
        showEndField(B1);
    } else if (((B1=="X") || (B1=="O")) && ((B1 == B4) && (B4 == B7))){
        showEndField(B1);
    } else if (((B9=="X") || (B9=="O")) && ((B9 == B8) && (B8 == B7))){
        showEndField(B9);
    } else if (((B9=="X") || (B9=="O")) && ((B9 == B6) && (B6 == B3))){
        showEndField(B9);
    } else if (((B4=="X") || (B4=="O")) && ((B4 == B5) && (B5 == B6))){
        showEndField(B4);
    } else if (((B2=="X") || (B2=="O")) && ((B2 == B5) && (B5 == B8))){
        showEndField(B2);
    } else if (((B1=="X") || (B1=="O")) && ((B1 == B5) && (B5== B9))){
        showEndField(B1);
    } else if (((B7=="X") || (B7=="O")) && ((B7 == B5) && (B5 == B3))){
        showEndField(B7);
    } else if (((B1=="X") || (B1=="O")) && ((B2=="X") || (B2=="O")) && ((B3=="X") || (B3=="O")) && ((B4=="X") || (B4=="O")) && ((B5=="X") || (B5=="O")) && ((B6=="X") || (B6=="O")) && ((B7=="X") || (B7=="O")) && ((B8=="X") || (B8=="O")) && ((B9=="X") || (B9=="O"))){
        tieMessage();
    }
        
    

}

var popUp = document.getElementById("text");

function showEndField(winner){
    popUp.innerText = winner + " wins!";
    document.getElementById("endField").style.display = "block";
    
    b1.removeEventListener("click", clickBox1);
    b2.removeEventListener("click", clickBox2);
    b3.removeEventListener("click", clickBox3);
    b4.removeEventListener("click", clickBox4);
    b5.removeEventListener("click", clickBox5);
    b6.removeEventListener("click", clickBox6);
    b7.removeEventListener("click", clickBox7);
    b8.removeEventListener("click", clickBox8);
    b9.removeEventListener("click", clickBox9);
}

function tieMessage(){
    popUp.innerText = "Tie!";
    document.getElementById("endField").style.display = "block";
}


/////////////////////////////////////////////////////////
var endWindowButton = document.getElementById("endFieldButton");
var resetGameButton = document.getElementById("restartButton");

endWindowButton.addEventListener("click", resetGame);
resetGameButton.addEventListener("click", resetGame);

// function gameResetButton(){

//     endWindowButton.addEventListener("click", resetGame);
//     resetGameButton.addEventListener("click", resetGame);
// }


function resetGame(){

    var B1 = document.getElementById("td-one").textContent;
    var B2 = document.getElementById("td-two").textContent;
    var B3 = document.getElementById("td-three").textContent;
    var B4 = document.getElementById("td-four").textContent;
    var B5 = document.getElementById("td-five").textContent;
    var B6 = document.getElementById("td-six").textContent;
    var B7 = document.getElementById("td-seven").textContent;
    var B8 = document.getElementById("td-eight").textContent;
    var B9 = document.getElementById("td-nine").textContent;

    B1.innerText = "";
    B2.innerText = "";
    B3.innerText = "";
    B4.innerText = "";
    B5.innerText = "";
    B6.innerText = "";
    B7.innerText = "";
    B8.innerText = "";
    B9.innerText = "";

    document.getElementById("endField").style.display = "none";

}