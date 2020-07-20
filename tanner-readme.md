# Tanner's Tic Tac Toe

## Welcome!
This is a project that I did for my General Assembly immersive coding bootcamp.
The project was created using HTML, CSS and vanilla Javascript.

## Main issues
**My main issues were mostly design oriented and creating a dry and non-redundant Javascript file.**
1. *With my CSS, I had trouble designing my grid.* Additionally, the grid, when created, extended to the full length of the window. 
2. I had a problem editing the css for the new DOM elements.
3. Using redundant code.

## Solutions
- Some solutions to my problem would be placing a transparent tic-tac-toe grid on top as a grid design.
- I could have also replaced my x's and o's with images!
- To create more dry code, I could have created a function for the repeating code and then called that function in place for the old code.

## Highlights
*Here is an example of some code that I want to highlight.*

Below is the code I used to alternate x and o when a tile was clicked.
I utilized a for loop to loop through an array of ["x", "o"] 
so that when clicked the "x" will change to "o" and a reverse for loop to go back to "x".

```
let options = ["x", "o"];
let choice = options[0];

function alternatePiece(element) {  
if(choice === options[0]) {
        for(let i = 0; i < options.length; i++) {
          choice = options[i];
        } 
    } else {
        for (let i = options.length; i>=0; i--) {
            choice = options[i]
        }
    }
}
document.getElementById("boxes").addEventListener('click', alternatePiece);
```