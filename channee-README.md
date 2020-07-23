#  Channee TIK TAK TOE Class work 

### Technologies That I used 
1. HTML 
2. JavaSCript
3. CSS
### This is what my app is trying to do. 
let the user be able to play a classic tic tac toe game and on click have X and O displayed in each Box and show whos turn is it and whos the winner and once the game is done to have a reset.
```
## CODE SNIPPETS
``` HTML 
```
1.Html I startd thinking of the divs I need and put classes on so I made one parent div Called gameStatus that has childs of the status and reset 
<Body>
    <div class="gameStatus">
    <div class="status">X your up!</div>
    <div class="reset">Reset</div>
    </div>
</body>

2.Html I knew a grid layout of 9 
3 by 3 boxes and made parent div containerOne and had child div in there to be later used for user interaction. 

<div class="containerOne">
    <div class="gridCellItem top-left"></div>
    <div class="gridCellItem top-middle"></div>
    <div class="gridCellItem top-right"></div>
    <div class="gridCellItem middle-left"></div>
    <div class="gridCellItem middle-middle"></div>
    <div class="gridCellItem middle-right"></div>
    <div class="gridCellItem bottom-left"></div>
    <div class="gridCellItem bottom-middle"></div>
    <div class="gridCellItem bottom-right"></div>
    
  </div>

    *HTML SUMMARY*
  Being able to set up a basic visual HTML lay out and linkin the app.js and style.css to work, triggers my familiarity to make sure what I do in those sections, respectively, will be displayed or work propperly to the HTML. Also, I had so much ideas on how I wanted it to visualy look and what images I wanted to link in and have animate, but I knew what mattered most is making the game work. 

``` CSS
1.CSS After playing the Frog Flex Box game the garden game on grids a few times, it stuck on temporarly but I had to go back and see it again and played with those different ways of positioning. Made a grid lay out for my div class .containerOne.

.containerOne {
  background: lightblue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  height: 200px;
}

2.CSS Wanted a user visual when they hover a cell box the pointer changes. so I googled css hover optoins. and found courser: pointer that shows a finger pointer when user hovers over and placed it in my div class id .gridCelltiem

c.gridCellItem {
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  background: white;
}

    *CSS SUMMARY*
I understand this is the style area and have a basic grasp of how to play with colors,displays,text,font, and sizing depending on the project whether I needed a display: grid or Display flex. I played with both and the Games the instructors linked that invovled frogs moving around and the gardens helped alot. Again, I had more visualy ideas of how I wanted to make it look, but its about making it work and that is my weakest point in our SEIR class. The Java. 

  JAVASCRIPT

```
1. JAVASCRIPT
    Everytime I begin this area I always draw a blank stare I have an idea of what I want seen on the screen and in the cell boxes but I didnt know where to begin so I started multiple googles what a tic tac toe looks like to visually see how its done, however when I've gotten more TA help on understanding the concept I feel better about approaching these challenges.

if(moves.includes(0) && moves.includes(1) && moves.includes(2)){
       status.textContent = player + ' win'
       gameEnd = true;
        console.log('Top horizontal win' + '🐯')

2. this code above is something im proud because i found a new method to compare booleans the .includes made sense to me rather then having to change it from the actuall cell id or class themselves. It made things alot easier to compare

