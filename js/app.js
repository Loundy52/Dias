const statusDisplay = document.getElementsByClassName('.gameStatus');
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
    ['box3', 'box5', 'box7']
];



const container = document.querySelector('.container');
console.log(container)


for (i = 1; i <= 9; i++){
    const box = document.createElement('div')
    box.classList.add('box')
    box.id = 'box' + i
    box.addEventListener('click',() =>{
        console.log('div clicked')
        if(switchPlayer % 2 == true){
            if(box.textContent === 'X' || box.textContent === 'O'){
                return;
            }else{
                box.textContent = 'X';
                box.classList.add('player_x')
                switchPlayer++;
            }
         } else {
            if(box.textContent === 'X' || box.textContent === 'O'){
                return;
            } else{
                box.textContent = 'O';
                box.classList.add('player_o')
                switchPlayer++;
            }
        }
        
    });
    container.appendChild(box) 
}


console.log(container)



// function findingWinner(){
    //    for (i= 0; i <= 1; i++);
    //     if (box.classList.player_x = container.box.id.box1 && container.box.id.box2 && containter.box.id.box3) {
        //         return true; 
        
        //     } 
        //     console.log(player_x)
        
        
        // }
        
        
        // function findingWinner(){
        //     var className = document.getElementById('box1').getAttribute('class');
        //     var className = document.getElementById('box2').getAttribute('class');
        //     var className = document.getElementById('box3').getAttribute('class');
        //     var className = document.getElementById('box4').getAttribute('class');
        //     var className = document.getElementById('box5').getAttribute('class');
        //     var className = document.getElementById('box6').getAttribute('class');
        //     var className = document.getElementById('box7').getAttribute('class');
        //     var className = document.getElementById('box8').getAttribute('class');
        //     var className = document.getElementById('box9').getAttribute('class');
        //     if document.getElementById('box1') === document.getAttribute('class')
        
            
            

        // }
        // findingWinner();

