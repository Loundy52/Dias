// let checkTurn= document.querySelector("#whoseTurn");
// let xTurn= document.querySelector("#whoseTurn").createElement("h4");
//     xTurn.textContent= "X Turn";
// let oTurn= document.querySelector("#whoseTurn").createElement("h5");
//     oTurn.textContent= "O Turn";


// document.querySelector(".gameBoard").addEventListener("click", turns)
// let turns= function() {
//     let clicks= 0;
//     clicks += 1;
//     if (clicks === null) {  
//     } else if (clicks % 2 !== 0) {
//     }
// }




document.querySelector("#leftT").addEventListener("click", onClick1);
function onClick1() {
    let checkX= document.querySelector("#X1");
    let checkO= document.querySelector("#O1");
    let move1= document.querySelector("#leftT");
    let xMove= document.createElement("h2");
    xMove.setAttribute("id", "X1");
    let xRemove= document.querySelector("#X1");
    let oMove= document.createElement("h3");
    oMove.setAttribute("id", "O1");
    let oRemove= document.querySelector("#O1");
    if (checkO !== null && checkX === null) {
        move1.removeChild(oRemove);
        move1.appendChild(xMove);
        xMove.textContent= "X";
    } else if (checkX !== null && checkO === null) {
        move1.removeChild(xRemove);
        move1.appendChild(oMove);
        oMove.textContent= "O";
    } else if (checkX === null || checkO !== null) {
        move1.appendChild(xMove);
        oMove.textContent= "X";
    }

}

document.querySelector("#midT").addEventListener("click", onClick2);
function onClick2() {
    let checkX= document.querySelector("#X2");
    let checkO= document.querySelector("#O2");
    let move2= document.querySelector("#midT");
    let xMove= document.createElement("h2");
    xMove.setAttribute("id", "X2");
    let xRemove= document.querySelector("#X2");
    let oMove= document.createElement("h3");
    oMove.setAttribute("id", "O2");
    let oRemove= document.querySelector("#O2");
    if (checkO !== null && checkX === null) {
        move2.removeChild(oRemove);
        move2.appendChild(xMove);
        xMove.textContent= "X";
    } else if (checkX !== null && checkO === null) {
        move2.removeChild(xRemove);
        move2.appendChild(oMove);
        oMove.textContent= "O";
    } else if (checkX === null || checkO !== null) {
        move2.appendChild(xMove);
        oMove.textContent= "X";
    }
}

document.querySelector("#rightT").addEventListener("click", onClick3);
function onClick3() {
    let checkX= document.querySelector("#X3");
    let checkO= document.querySelector("#O3");
    let move3= document.querySelector("#rightT");
    let xMove= document.createElement("h2");
        xMove.setAttribute("id", "X3");
    let xRemove= document.querySelector("#X3");
    let oMove= document.createElement("h3");
        oMove.setAttribute("id", "O3");
    let oRemove= document.querySelector("#O3");
    if (checkO !== null && checkX === null) {
        move3.removeChild(oRemove);
        move3.appendChild(xMove);
        xMove.textContent= "X";
    } else if (checkX !== null && checkO === null) {
        move3.removeChild(xRemove);
        move3.appendChild(oMove);
        oMove.textContent= "O";
    } else if (checkX === null || checkO !== null) {
        move3.appendChild(xMove);
        oMove.textContent= "X";
    }
}

document.querySelector("#leftM").addEventListener("click", onClick4);
function onClick4() {
    let checkX= document.querySelector("#X4");
    let checkO= document.querySelector("#O4");
    let move4= document.querySelector("#leftM");
    let xMove= document.createElement("h2");
    xMove.setAttribute("id", "X4");
    let xRemove= document.querySelector("#X4");
    let oMove= document.createElement("h3");
    oMove.setAttribute("id", "O4");
    let oRemove= document.querySelector("#O4");
    if (checkO !== null && checkX === null) {
        move4.removeChild(oRemove);
        move4.appendChild(xMove);
        xMove.textContent= "X";
    } else if (checkX !== null && checkO === null) {
        move4.removeChild(xRemove);
        move4.appendChild(oMove);
        oMove.textContent= "O";
    } else if (checkX === null || checkO !== null) {
        move4.appendChild(xMove);
        oMove.textContent= "X";
    }
}

document.querySelector("#midM").addEventListener("click", onClick5);
function onClick5() {
    let checkX= document.querySelector("#X5");
    let checkO= document.querySelector("#O5");
    let move5= document.querySelector("#midM");
    let xMove= document.createElement("h2");
    xMove.setAttribute("id", "X5");
    let xRemove= document.querySelector("#X5");
    let oMove= document.createElement("h3");
    oMove.setAttribute("id", "O5");
    let oRemove= document.querySelector("#O5");
    if (checkO !== null && checkX === null) {
        move5.removeChild(oRemove);
        move5.appendChild(xMove);
        xMove.textContent= "X";
    } else if (checkX !== null && checkO === null) {
        move5.removeChild(xRemove);
        move5.appendChild(oMove);
        oMove.textContent= "O";
    } else if (checkX === null || checkO !== null) {
        move5.appendChild(xMove);
        oMove.textContent= "X";
    }
}

document.querySelector("#rightM").addEventListener("click", onClick6);
function onClick6() {
    let checkX= document.querySelector("#X6");
    let checkO= document.querySelector("#O6");
    let move6= document.querySelector("#rightM");
    let xMove= document.createElement("h2");
    xMove.setAttribute("id", "X6");
    let xRemove= document.querySelector("#X6");
    let oMove= document.createElement("h3");
    oMove.setAttribute("id", "O6");
    let oRemove= document.querySelector("#O6");
    if (checkO !== null && checkX === null) {
        move6.removeChild(oRemove);
        move6.appendChild(xMove);
        xMove.textContent= "X";
    } else if (checkX !== null && checkO === null) {
        move6.removeChild(xRemove);
        move6.appendChild(oMove);
        oMove.textContent= "O";
    } else if (checkX === null || checkO !== null) {
        move6.appendChild(xMove);
        oMove.textContent= "X";
    }
}

document.querySelector("#leftB").addEventListener("click", onClick7);
function onClick7() {
    let checkX= document.querySelector("#X7");
    let checkO= document.querySelector("#O7");
    let move7= document.querySelector("#leftB");
    let xMove= document.createElement("h2");
    xMove.setAttribute("id", "X7");
    let xRemove= document.querySelector("#X7");
    let oMove= document.createElement("h3");
    oMove.setAttribute("id", "O7");
    let oRemove= document.querySelector("#O7");
    if (checkO !== null && checkX === null) {
        move7.removeChild(oRemove);
        move7.appendChild(xMove);
        xMove.textContent= "X";
    } else if (checkX !== null && checkO === null) {
        move7.removeChild(xRemove);
        move7.appendChild(oMove);
        oMove.textContent= "O";
    } else if (checkX === null || checkO !== null) {
        move7.appendChild(xMove);
        oMove.textContent= "X";
    }
}

document.querySelector("#midB").addEventListener("click", onClick8);
function onClick8() {
    let checkX= document.querySelector("#X8");
    let checkO= document.querySelector("#O8");
    let move8= document.querySelector("#midB");
    let xMove= document.createElement("h2");
    xMove.setAttribute("id", "X8");
    let xRemove= document.querySelector("#X8");
    let oMove= document.createElement("h3");
    oMove.setAttribute("id", "O8");
    let oRemove= document.querySelector("#O8");
    if (checkO !== null && checkX === null) {
        move8.removeChild(oRemove);
        move8.appendChild(xMove);
        xMove.textContent= "X";
    } else if (checkX !== null && checkO === null) {
        move8.removeChild(xRemove);
        move8.appendChild(oMove);
        oMove.textContent= "O";
    } else if (checkX === null || checkO !== null) {
        move8.appendChild(xMove);
        oMove.textContent= "X";
    }
}

document.querySelector("#rightB").addEventListener("click", onClick9);
function onClick9() {
    let checkX= document.querySelector("#X9");
    let checkO= document.querySelector("#O9");
    let move9= document.querySelector("#rightB");
    let xMove= document.createElement("h2");
    xMove.setAttribute("id", "X9");
    let xRemove= document.querySelector("#X9");
    let oMove= document.createElement("h3");
    oMove.setAttribute("id", "O9");
    let oRemove= document.querySelector("#O9");
    if (checkO !== null && checkX === null) {
        move9.removeChild(oRemove);
        move9.appendChild(xMove);
        xMove.textContent= "X";
    } else if (checkX !== null && checkO === null) {
        move9.removeChild(xRemove);
        move9.appendChild(oMove);
        oMove.textContent= "O";
    } else if (checkX === null || checkO !== null) {
        move9.appendChild(xMove);
        oMove.textContent= "X";
    }
}

