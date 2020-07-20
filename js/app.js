var moveCount = 0;
var boxes = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("4"), document.getElementById("5"), document.getElementById("6"), document.getElementById("7"), document.getElementById("8"), document.getElementById("9")];
    
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
    
}

document.addEventListener('DOMContentLoaded', function()
{
    boxes.forEach(box =>
    {
        box.addEventListener("click", function() 
        {
            if (box.textContent !== "X" && box.textContent !== "O")
            {
                box.textContent = whatMove();
                moveCount++;
                whoMove();
                if (moveCount === 9)
                {
                    console.log("Game finished");
                }
            }
        });
    });
});