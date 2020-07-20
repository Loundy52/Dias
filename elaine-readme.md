# Tic Tac Toe ReadMe
This is a project made for General Assembly class.

## Elements
--------

* HTML
* CSS
* JavaScript

## HTML
------
HTML logs all of my divs.

## CSS
------
For my CSS I've used grid template to ensure my elements end up in a traditional gameboard layout. 

## JavaScript
-----
For my JavaScript I created functions to allow game play and create a saved array to run scores and outcomes.

``` 
winningCombos.forEach(function(combo, index){
    if (gameboard[combo[0]] && gameboard[combo[0]] === gameboard[combo[1]] && gameboard[combo[0]] === gameboard[combo[2]]) player = gameboard[combo[0]];
});
return player ? player: gameboard.includes('') ? null : 'T';
};

This code snippet creates a rule that if the input of gameboard is equal to a combination found in winningCombos to return the player name.