# Cabassa's Tik-Tak-Toe
## Technologies
- HTML
- Css
- JavaScript

## Code Snippet

```
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
```
This snippet is from my app.js and it determines what happens when you click on one of the boxes on my game board (specifically the top-left).

### I realize that my app doesn't work. After this morning's cohort I have some GREAT ideas on how to fix this