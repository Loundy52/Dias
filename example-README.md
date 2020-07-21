# Tic-Tac-Toe README Example

## Agenda:
Build a Tic Tac Toe game with HTML, CSS, and JavaScript.


## HTML:
#### Body:
Create a HTML template within the body. 
``` <body>
    <div class="container">
        <h1 class="title">Tic-Tac-Toe</h1>
        <div class="status-action">
        <div class="status">x Turn</div>
        <div class="reset">Reset</div>
    </div>
    <div class="board">
      <div class="game"></div>
      <div class="game"></div>
      <div class="game"></div>
      <div class="game"></div>
      <div class="game"></div>
      <div class="game"></div>
      <div class="game"></div>
      <div class="game"></div>
      <div class="game"></div>
    </div>
   </body> 
   ```

## CSS:
After create a HTML, next step is to style the page using CSS. Below is the image of how it looks with css styling. 

![alt tic-tac-toe-layout](file:///Users/philipyap/Downloads/_Users_philipyap_Documents_general_assembly_homework_tik-tak-toe_index.html%20(1).png)

## JavaScript:

In the JS file, first is to create the selectors that we are going to work with.
```
const status = document.querySelector('.status');
const reset = document.querySelector('.reset');
const game = document.querySelectorAll('.game');

```


Then, create a winner output
```
const getWinner = (letter) => {
  gameIs = false;
  if (letter === 'x') {
    status.innerHTML =  `${letterToSymbol(letter)} has won!`;
  } else {
    status.innerHTML = `${letterToSymbol(letter)} has won!`;
  }
};
```
Build the 8 ways of game winning method. 
```
const checkGameStatus = () => {
  const topLeft = game[0].classList[1];
  const topMiddle = game[1].classList[1];
  const topRight = game[2].classList[1];
  const middleLeft = game[3].classList[1];
  const middleMiddle = game[4].classList[1];
  const middleRight = game[5].classList[1];
  const bottomLeft = game[6].classList[1];
  const bottomMiddle = game[7].classList[1];
  const bottomRight = game[8].classList[1];
  ```
Next, is to create who is the next turn to play the game
```

const gameClick = (event) => {
  const classList = event.target.classList;

  if (!gameIs || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xTurn) {
    classList.add('x');
    checkGameStatus();
  } else {
    classList.add('o');
    checkGameStatus();
  }
};
```

 The game result will be removed when the player click on reset
 ```
const getReset = () => {
  xTurn = true;
  status.innerHTML = `${'x'} Turn`;
  for (const gameOne of game) {
    gameOne.classList.remove('x');
    gameOne.classList.remove('o');
    gameOne.classList.remove('won');
  }
  gameIs = true;
};
```
Lastly, in order to reset the game, we create an event handler which helps to reset after the click
```
reset.addEventListener('click', getReset);

for (const gameOne of game) {
  gameOne.addEventListener('click', gameClick)
}

```