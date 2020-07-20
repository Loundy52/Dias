# Tic Tac Toe
*A deceptively simple game of Tic Tac Toe to experiment with HTML5 document structure, CSS styles, and DOM manipulation via JavaScript.* 

## Technologies
- HTML5
- CSS
- JavaScript

## Methods
### HTML
I structured the game board by creating one main div `game-board` with three child divs with classes `board-left, board-center, board-right` to represent the columns. I gave each of the three column divs three child divs each with unique number ids to represent the individual squares in that particular row.
```
<div class="game-board"><!--main board div-->
    <div class="board-left"> 
      <div class="square left top" id="0"></div>
      <div class="square left middle" id="1"></div>
      <div class="square left bottom" id="2"></div>
    </div>
    ...
</div>
```
_See [index1.html](https://github.com/blangwell/tik-tak-toe/blob/master/index.html) for the full code_

### CSS
The div borders are identified by their class names and borders are styled for the sides necessary to create the board. I grouped div styles together based on which borders *(top, right, bottom, or left)* are required to create the correct Tic Tac Toe layout. 

```
.left.top, .center.top{
    border-right: 10px solid black;
    border-bottom: 10px solid black;
  }

.right.top, .right.middle {
    border-bottom: 10px solid black;
  }
```
_See [style2.css](https://github.com/blangwell/tik-tak-toe/blob/master/css/style2.css) for the full code_

### Javascript
For this beginner, this project was a real trial by fire in DOM manipulation via JavaScript *(as evidenced by the lengthy code graveyard.)* The basic logic of setting the event listeners and alternating turns between Xs and Os was simple enough. 
```
let moves = 1 ;;
...

if (moves % 2 === 0 && moves < 10) {  //  x/o logic

        element.textContent = 'o'; 
        element.classList.add('playerO'); 
        gameMessage.textContent = 'It\'s X\'s Turn'; 
        console.log(element.id);
        
    } else {

        element.textContent = 'x';
        // append player name to class list
        element.classList.add('playerX') 
        gameMessage.textContent = 'It\'s O\'s Turn';
        console.log(element.id);
    }
```
However when it came time to implement victory conditions, the project became much trickier. The difficulty in implementing victory logic revealed some misconceptions regarding the process of setting up event listeners, function scope, and array methods. I will rewrite this program to successfully implement the missing victory logic, but will be keeping this repository for posterity.

_See [app2.js](https://github.com/blangwell/tik-tak-toe/blob/master/css/style2.css) for the full code_