# TIC-TAC-TOE
## The purpose of the readme is to explain my code logic and design

# HTML PORTION
## Design 

* Gameboard Design: 3x3 board
* type ! then press enter into the type space on vscode 
* Do all below steps before the body and html closing tags
* Create main DIV called "headings"
* nest h1. h2. and other headers in main Div

```html
<div class="headings">
    <h1>Tic-Tac-Toe!</h1>
    <h2> Player 1 vs. Player 2 </h2>
    <div><p class="alert"></p></div>
    <div><p class="announceWinner"></p></div>
</div>
```

* create another Div with a class of "allSquares"
* create 3 separate Divs with a class of "row"
* create a Div for each square on the board and assign a class name of "square" to each of them
* assign a different id for each of squares next to the class name
 
```html
<div class="allSquares">

  <div class ="Row"> 
    <div class="square" id="square1"> </div>
    <div class="square" id="square2"> </div>
    <div class="square" id="square3"> </div>
  </div>
  
  <div class="Row">
    <div class="square" id="square4"> </div>
    <div class="square" id="square5"> </div>
    <div class="square" id="square6"> </div>
  </div>
  
  <div class="Row">
    <div class="square" id="square7"> </div>
    <div class="square" id="square8"> </div>
    <div class="square" id="square9"> </div>
  </div>

</div>
```

* create a CLEAR GAME button
* assign the button a Div using the class of "clearGame"

```html
<div class="clearGame">
    <button>CLEAR GAME</button>
</div>
```
~HTML PORTION IS DONE FOR NOW
# CSS PORTION
## Design 

* CSS selects elements from the html file and assigns attributes to change the design
* body { code for attributes go here }
* center text in the whole body by assigning body a code of text-align: center;
* example below - this should be a consistent format when using CSS

```css
body {
  text-align: center; 
  }
```







