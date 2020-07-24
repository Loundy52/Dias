# Tic Tac Toe
by Subrata Roy

## Programs
Programs used HTML, CSS, JavaScript

## Details

### HTML

I have basic boilerplate, just in the body I have 2 divs. 

In div 1, I have header of Tic Tac Toe, header of Players Turn and a button.

div 2, I have created for creating of all the boxes for tic tac toe.

### CSS

I Used a `display:Grid` for creating a grid box of div 2.

### JavaScript

I have put all my code inside `DOMContentLoaded` eventlistener so my codes will work after document is loaded.

```
    var mainContainer = document.querySelector('.container');
    var winner = document.querySelector('h2');
    var reset = document.querySelector('.button');
    var turnCount = 1;
    var boxArray = [];
    var winnerIs = '' ;
```

1st I have defined my varialbes using `querySelector` those  variables I am going to work with JavaScript and also my global variables.

```
for (let i=0; i<9 ; i++) {
        // gameStop();
        const boxes = document.createElement('div');
        boxes.classList.add('boxContainer');
        boxes.id = 'boxes' + i;
        //click event listener
        boxes.addEventListener('click', event => {
            gameStop();
            if (turnCount % 2 == true) { 
                if (boxes.textContent === 'X' || boxes.textContent === 'O' || winnerIs === 'X' || winnerIs === 'O') {
                    return;
                } else {
                    boxes.style.color = 'black';
                    boxes.textContent = 'X';
                    boxes.classList.add('x');
                    winner.textContent = 'O is Next';
                    winner.style.color = 'white';
                    storeValue();
                    turnCount++;
                }
            } else {
                if (boxes.textContent === 'X' || boxes.textContent === 'O' || winnerIs === 'X' || winnerIs === 'O' ){
                    return;
                } else {
                    boxes.style.color = 'white';
                    boxes.textContent = 'O';
                    boxes.classList.add('o');
                    winner.textContent= 'X is Next';
                    winner.style.color = 'Black';
                    storeValue();
                    turnCount++;
                }
            } 
            // resets the game
            reset.addEventListener('click', event => {
                if ( winnerIs === 'X') {
                    i = 0;
                    winner.innerHTML = 'Let\'s Play The Game! </br> O is First';
                    winner.style.color = 'white';
                } else if(winnerIs === 'O'){
                    i = 0;
                    winner.innerHTML = 'Let\'s Play The Game! </br> X is First';
                    winner.style.color = 'black';
                }
                winnerIs = '';
                boxes.textContent = '';
            });
            // function to stop the event when there is a winner
            function gameStop() {
                if(winnerIs === 'X' || winnerIs === 'O'){
                    return; 
                }
            }

        } 

        ); // End of event Listener

        mainContainer.appendChild(boxes);
       
        function storeValue() {
            boxArray[i]=boxes.textContent;
            winnerCheck();
        }
        
} // End of for Loop
```
Here is my main function which is making happen everything on the game.

As you can see, I used a `for` loop. Inside `for` loop, using javascript I have created a div in html, gave is a class and also and different id for each divs.

Then I created a eventlistener for clicking event on each divs.

Inside eventListener, `gameStop();` calling this function for check if there is a winner.





