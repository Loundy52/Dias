# Tik-Tak-Toe
 ## Project for week one of GA
<p> Made attempt to create a fully functioning two player tik tak toe game. This project was much more complex than I expected and look forward to revising it into a fully functioning and more advanced game.<p>

 ## Technologies utilized
 1. HTML
 2. CSS
 3. Javascript

 ## HTML

This is the div I made to display the results of the game, however i was unable to get this functioning thus far.
```
<div id="endField">
    <p id = "text">text</p>>
    <button id = "endFieldButton" onclick = "startNewGame()">New Game</button>
  </div>
```
 
 ## CSS

This was how I styled the table to display the traditional gameboard
```
    #td-one{
  border-top: transparent;
  border-left: transparent;
}
#td-two{
  border-top: transparent;
}
#td-three{
  border-top: transparent;
  border-right: transparent;
}
#td-four{
  border-left: transparent;
}
#td-six{
  border-right: transparent;
}
#td-seven{
  border-left: transparent;
  border-bottom: transparent;
}
#td-eight{
  border-bottom: transparent;
}
#td-nine{
  border-bottom: transparent;
  border-right: transparent;
}
```

 ## Javascript

 This was my way of identifying elements to make code as short and clean as possible.
 ```
    var b1 = document.getElementById("buttonOne");
    var b2 = document.getElementById("buttonTwo");
    var b3 = document.getElementById("buttonThree");
    var b4 = document.getElementById("buttonFour");
    var b5 = document.getElementById("buttonFive");
    var b6 = document.getElementById("buttonSix");
    var b7 = document.getElementById("buttonSeven");
    var b8 = document.getElementById("buttonEight");
    var b9 = document.getElementById("buttonNine");
```
This was my way of defining all winning conditions.
``` 
    if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
        showEndField(b1);
    } else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        showEndField(b1);
    } else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
        showEndField(b9);
    } else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
        showEndField(b9);
    } else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
        showEndField(b4);
    } else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
        showEndField(b2);
    } else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
        showEndField(b1);
    } else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
        showEndField(b7);
    }
```

