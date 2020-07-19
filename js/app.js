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
    let oRemove= document.querySelector("h3");
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
    let oRemove= document.querySelector("h3");
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
    let oRemove= document.querySelector("h3");
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

// document.querySelector("#leftM").addEventListener("click", onClick4);
// document.querySelector("#midM").addEventListener("click", onClick5);
// document.querySelector("#rightM").addEventListener("click", onClick6);
// document.querySelector("#leftB").addEventListener("click", onClick7);
// document.querySelector("#midB").addEventListener("click", onClick8);
// document.querySelector("#rightB").addEventListener("click", onClick9);

