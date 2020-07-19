document.querySelector("#leftT").addEventListener("click", onClick1);
function onClick1() {
    let checkX= document.querySelector("#X1");
    let checkO= document.querySelector("#O1");
    let move1= document.querySelector("#leftT");
    let xMove= document.createElement("h2");
    xMove.setAttribute("id", "X1");
    let oMove= document.createElement("h3");
    oMove.setAttribute("id", "O1");
    if (checkX === null) {
        xMove.textContent= "X";
        move1.appendChild(xMove);
        console.log(checkX);
    } else if (checkX !== null && checkO === null) {
            oMove.textContent= "O";
            move1.appendChild(oMove);
        }   
}

// document.querySelector("#midT").addEventListener("click", onClick2);
// document.querySelector("#rightT").addEventListener("click", onClick3);
// document.querySelector("#leftM").addEventListener("click", onClick4);
// document.querySelector("#midM").addEventListener("click", onClick5);
// document.querySelector("#rightM").addEventListener("click", onClick6);
// document.querySelector("#leftB").addEventListener("click", onClick7);
// document.querySelector("#midB").addEventListener("click", onClick8);
// document.querySelector("#rightB").addEventListener("click", onClick9);


// function onClick1() {
    //     if (X1.style.visiblity= "hidden")
//     document.querySelector("#X1").style.visibility = "visible";
// }

// function onClick2() {
//     if (X2.style.visiblity= "hidden")
//     document.querySelector("#X2").style.visibility = "visible";
// }

// function onClick3() {
//     if (X3.style.visiblity= "hidden")
//     document.querySelector("#X3").style.visibility = "visible";
// }

// function onClick4() {
//     if (X4.style.visiblity= "hidden")
//     document.querySelector("#X4").style.visibility = "visible";
// }

// function onClick5() {
//     if (X5.style.visiblity= "hidden")
//     document.querySelector("#X5").style.visibility = "visible";
// }

// function onClick6() {
//     if (X6.style.visiblity= "hidden")
//     document.querySelector("#X6").style.visibility = "visible";
// }

// function onClick7() {
//     if (X7.style.visiblity= "hidden")
//     document.querySelector("#X7").style.visibility = "visible";
// }

// function onClick8() {
//     if (X8.style.visiblity= "hidden")
//     document.querySelector("#X8").style.visibility = "visible";
// }

// function onClick9() {
//     if (X9.style.visiblity= "hidden")
//     document.querySelector("#X9").style.visibility = "visible";
// }