
var currentPlayer = "x";

function boxes() {

    var b1 = document.getElementById("buttonOne");
    var b2 = document.getElementById("buttonTwo");
    var b3 = document.getElementById("buttonThree");
    var b4 = document.getElementById("buttonFour");
    var b5 = document.getElementById("buttonFive");
    var b6 = document.getElementById("buttonSix");
    var b7 = document.getElementById("buttonSeven");
    var b8 = document.getElementById("buttonEight");
    var b9 = document.getElementById("buttonNine");
    
    b1.value="";
    b2.value="";
    b3.value="";
    b4.value="";
    b5.value="";
    b6.value="";
    b7.value="";
    b8.value="";
    b9.value="";
    b1.disabled=false;
    b2.disabled=false;
    b3.disabled=false;
    b4.disabled=false;
    b5.disabled=false;
    b6.disabled=false;
    b7.disabled=false;
    b8.disabled=false;
    b9.disabled=false;
    
    document.getElementById("endField").style.visibility = "hidden";
    document.getElementById("overlay").style.visibility = "hidden";
}

function disableButtons() {

    var b1 = document.getElementById("buttonOne");
    var b2 = document.getElementById("buttonTwo");
    var b3 = document.getElementById("buttonThree");
    var b4 = document.getElementById("buttonFour");
    var b5 = document.getElementById("buttonFive");
    var b6 = document.getElementById("buttonSix");
    var b7 = document.getElementById("buttonSeven");
    var b8 = document.getElementById("buttonEight");
    var b9 = document.getElementById("buttonNine");
    
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
}

function showEndField(winner) {

      disableButtons();
    
      popuptext = document.getElementById("text");
      popuptext.innerHTML = winner + " wins.";
    
      var pop = document.getElementById("popup");
      var overlay = document.getElementById("overlay");
      pop.style.visibility = "visible";
      overlay.style.visibility ="visible"
}


function lastCheck() {
    var b1 = document.getElementById("buttonOne").value;
    var b2 = document.getElementById("buttonTwo").value;
    var b3 = document.getElementById("buttonThree").value;
    var b4 = document.getElementById("buttonFour").value;
    var b5 = document.getElementById("buttonFive").value;
    var b6 = document.getElementById("buttonSix").value;
    var b7 = document.getElementById("butttonSeven").value;
    var b8 = document.getElementById("buttonEight").value;
    var b9 = document.getElementById("buttonNine").value;
    
    
    if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
        showEndField(b1);
    } else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        showEndField(b1);
    } else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
        showEndField(b9);
    } else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
        showEndField(b9);
    } else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
        showEndField(b4);
    } else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
        showEndField(b2);
    } else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
        showEndField(b1);
    } else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
        showEndField(b7);
    }

    }

function replace(x, currentPlayer) {
     if (x==1) {
     var button = document.getElementById("buttonOne");
     button.value = currentPlayer;
     button.disabled=true;
     }
     else if (x==2) {
     var button = document.getElementById("buttonTwo");
     button.value = currentPlayer;
     button.disabled=true;
     }
     else if (x==3) {
     var button = document.getElementById("buttonThree");
     button.value = currentPlayer;
     button.disabled=true;
     }
     else if (x==4) {
     var button = document.getElementById("buttonFour");
     button.value = currentPlayer;
     button.disabled=true;
     }
     else if (x==5) {
     var button = document.getElementById("buttonFive");
     button.value = currentPlayer;
     button.disabled=true;
     }
     else if (x==6) {
     var button = document.getElementById("buttonSix");
     button.value = currentPlayer;
     button.disabled=true;
     }
     else if (x==7) {
     var button = document.getElementById("buttonSeven");
     button.value = currentPlayer;
     button.disabled=true;
     }
     else if (x==8) {
     var button = document.getElementById("buttonEight");
     button.value = currentPlayer;
     button.disabled=true;
     }
     else if (x==9) {
     var button = document.getElementById("buttonNine");
     button.value = currentPlayer;
     button.disabled=true;
     }
     lastCheck();
     }
  

function xORo(button) {
    if (currentPlayer == "x") {
    currentPlayer = "o";
    replace(button, currentPlayer);
    }
    else if (currentPlayer == "o") {
    currentPlayer = "x";
    replace(button, currentPlayer);
    }
    }