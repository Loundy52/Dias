const statusDisplay = document.getElementsByClassName(.gameStatus);
console.log(statusDisplay);

let gameActive = true;

var switchPlayer = 1;

const winningCombos = [
    ['box1', 'box2', 'box3'],
    ['box3', 'box4', 'box5'],
    ['box7', 'box8', 'box9'],
    ['box1', 'box4', 'box7'],
    ['box2', 'box5', 'box6'],
    ['box3', 'box6', 'box9'],
    ['box1', 'box5', 'box9'],
    ['box3', 'box5', 'box7'],
];

const container = document.querySelector('.container');
console.log(container)

for (i = 1; i<= 9); i++{
    const box = document.createElement('div')
    box.id = 'box' + 1
    box.addEventListener('click'),() =>{
        console.log('div clicked')
        if(box.textContent === 'X' || box.textContent === 'O'){
            return;
        } else{
            if(box.textContent === 'X' || box.textContent === 'O'){
                return;
            } else{
                box.textContent = '0';
                box.classList.add('player_o')
                switchPlayer;
                )
            }
        }
    }
}

//comment for reference