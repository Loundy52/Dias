let options = ["x", "o"];
let choice = null;

//collecting data on starting choice
//to see which box is clicked
if(document.querySelector('input[name="choice"]')) {
    document.querySelectorAll('input[name="choice"]').forEach((element) => {
    element.addEventListener("change", function(event) {
        let firstChoice = event.target.value;
        if (firstChoice === "0") {
            choice = options[0];
            console.log(options[0]);
        } 
        if (firstChoice === "1") {
            choice = options[1];
            console.log(options[1]);
        }
    });
    }); 
}

//function to alternate options


//if box 1 is clicked
const firstBox = document.getElementById("box1");
function chooseBox1(element) {
    const containerOne = document.createElement("p");
    containerOne.classList.add("container");
    firstBox.textContent = choice;
    firstBox.appendChild(containerOne);
}
document.getElementById("box1").addEventListener('click', chooseBox1);

//if box 2 is clicked
const secondBox = document.getElementById("box2");
function chooseBox2() {
    const containerTwo = document.createElement("p");
    containerTwo.classList.add("container");
    secondBox.textContent = choice;
    secondBox.appendChild(containerTwo);
}
document.getElementById("box2").addEventListener('click', chooseBox2);

//if box 3 is clicked
const thirdBox = document.getElementById("box3");
function chooseBox3() {
    const containerThree = document.createElement("p");
    containerThree.classList.add("container");
    thirdBox.textContent = choice;
    thirdBox.appendChild(containerThree);
}
document.getElementById("box3").addEventListener('click', chooseBox3);

//if box 4 is clicked
const fourthBox = document.getElementById("box4");
function chooseBox4() {
    const containerFour = document.createElement("p");
    containerFour.classList.add("container");
    fourthBox.textContent = choice;
    fourthBox.appendChild(containerFour);
}
document.getElementById("box4").addEventListener('click', chooseBox4);

//if box 5 is clicked
const fifthBox = document.getElementById("box5");
function chooseBox5() {
    const containerFive = document.createElement("p");
    containerFive.classList.add("container");
    fifthBox.textContent = choice;
    fifthBox.appendChild(containerFive);
}
document.getElementById("box5").addEventListener('click', chooseBox5);

//if box 6 is clicked
const sixthBox = document.getElementById("box6");
function chooseBox6() {
    const containerSix = document.createElement("p");
    containerSix.classList.add("container");
    sixthBox.textContent = choice;
    sixthBox.appendChild(containerSix);
}
document.getElementById("box6").addEventListener('click', chooseBox6);

//if box 7 is clicked
const seventhBox = document.getElementById("box7");
function chooseBox7() {
    const containerSeven = document.createElement("p");
    containerSeven.classList.add("container");
    seventhBox.textContent = choice;
    seventhBox.appendChild(containerSeven);
}
document.getElementById("box7").addEventListener('click', chooseBox7);

//if box 8 is clicked
const eigthBox = document.getElementById("box8");
function chooseBox8() {
    const containerEight = document.createElement("p");
    containerEight.classList.add("container");
    eigthBox.textContent = choice;
    eigthBox.appendChild(containerEight);
}
document.getElementById("box8").addEventListener('click', chooseBox8);

//if box 9 is clicked
const ninthBox = document.getElementById("box9");
function chooseBox9() {
    const containerNine = document.createElement("p");
    containerNine.classList.add("container");
    ninthBox.textContent = choice;
    ninthBox.appendChild(containerNine);
}
document.getElementById("box9").addEventListener('click', chooseBox9);

