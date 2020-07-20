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