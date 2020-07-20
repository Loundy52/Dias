var moveCount = 0;
const boxes = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("4"), document.getElementById("5"), document.getElementById("6"), document.getElementById("7"), document.getElementById("8"), document.getElementById("9")];

function whoMove()
{
    let message = document.querySelector("p");
    if (moveCount === 0)
    {}
    else if(moveCount % 2 === 0)
    {
        message.textContent = "It is now player X's turn!";
    }
    else
    {
        message.textContent = "It is now player O's turn!"
    }
}

function whatMove()
{
    if (moveCount === 0)
    {
        return "X";
    }
    else if(moveCount % 2 === 0)
    {
        return "X";
    }
    else
    {
        return "O";
    }
}

function checkWins()
{
    let message = document.querySelector("p");
    if (boxes[0].textContent !== "" && boxes[0].textContent === boxes[1].textContent && boxes[1].textContent === boxes[2].textContent)
    {
        console.log("Player " + boxes[0].textContent + " won!!!");
        message.textContent = "Player " + boxes[0].textContent + " wins!!!";
        boxes[0].style.backgroundColor = "pink";
        boxes[1].style.backgroundColor = "pink";
        boxes[2].style.backgroundColor = "pink";
    }
    if (boxes[3].textContent !== "" && boxes[3].textContent === boxes[4].textContent && boxes[4].textContent === boxes[5].textContent)
    {
        console.log("Player " + boxes[3].textContent + " won!!!");
        message.textContent = "Player " + boxes[3].textContent + " wins!!!";
        boxes[3].style.backgroundColor = "pink";
        boxes[4].style.backgroundColor = "pink";
        boxes[5].style.backgroundColor = "pink";
    }
    if (boxes[6].textContent !== "" && boxes[6].textContent === boxes[7].textContent && boxes[7].textContent === boxes[8].textContent)
    {
        console.log("Player " + boxes[6].textContent + " won!!!");
        message.textContent = "Player " + boxes[6].textContent + " wins!!!";
        boxes[6].style.backgroundColor = "pink";
        boxes[7].style.backgroundColor = "pink";
        boxes[8].style.backgroundColor = "pink";
    }

    if (boxes[0].textContent !== "" && boxes[0].textContent === boxes[3].textContent && boxes[3].textContent === boxes[6].textContent)
    {
        console.log("Player " + boxes[0].textContent + " won!!!");
        message.textContent = "Player " + boxes[0].textContent + " wins!!!";
        boxes[0].style.backgroundColor = "pink";
        boxes[3].style.backgroundColor = "pink";
        boxes[6].style.backgroundColor = "pink";
    }
    if (boxes[1].textContent !== "" && boxes[1].textContent === boxes[4].textContent && boxes[4].textContent === boxes[7].textContent)
    {
        console.log("Player " + boxes[1].textContent + " won!!!");
        message.textContent = "Player " + boxes[1].textContent + " wins!!!";
        boxes[1].style.backgroundColor = "pink";
        boxes[4].style.backgroundColor = "pink";
        boxes[7].style.backgroundColor = "pink";
    }
    if (boxes[2].textContent !== "" && boxes[2].textContent === boxes[5].textContent && boxes[5].textContent === boxes[8].textContent)
    {
        console.log("Player " + boxes[2].textContent + " won!!!");
        message.textContent = "Player " + boxes[2].textContent + " wins!!!";
        boxes[2].style.backgroundColor = "pink";
        boxes[5].style.backgroundColor = "pink";
        boxes[8].style.backgroundColor = "pink";
    }

    if (boxes[0].textContent !== "" && boxes[0].textContent === boxes[4].textContent && boxes[4].textContent === boxes[8].textContent)
    {
        console.log("Player " + boxes[0].textContent + " won!!!");
        message.textContent = "Player " + boxes[0].textContent + " wins!!!";
        boxes[0].style.backgroundColor = "pink";
        boxes[4].style.backgroundColor = "pink";
        boxes[8].style.backgroundColor = "pink";
    }
    if (boxes[2].textContent !== "" && boxes[2].textContent === boxes[4].textContent && boxes[4].textContent === boxes[6].textContent)
    {
        console.log("Player " + boxes[2].textContent + " won!!!");
        message.textContent = "Player " + boxes[2].textContent + " wins!!!";
        boxes[2].style.backgroundColor = "pink";
        boxes[4].style.backgroundColor = "pink";
        boxes[6].style.backgroundColor = "pink";
    }
}

function endGame()
{
    let message = document.querySelector("p");
    if (message.textContent === "Player X wins!!!" || message.textContent === "Player O wins!!!")
    {
        console.log("YAAY!");
        boxes.forEach(box =>
        {
            if (box.textContent !== "X" && box.textContent !== "O")
            {
                box.textContent = " ";
            }
        });
    }
    if (moveCount === 9)
    {
        let message = document.querySelector("p");
        message.textContent = "Tie Game (Cat's Game)!!"
    }
}



document.addEventListener('DOMContentLoaded', function()
{
    boxes.forEach(box =>
    {
        box.addEventListener("click", function() 
        {
            if (box.textContent !== "X" && box.textContent !== "O" && box.textContent !== " ")
            {
                box.textContent = whatMove();
                moveCount++;
                whoMove();
                checkWins();
                endGame();
            }
        });
    });
});