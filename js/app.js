const statusDisplay = document.getElementsByClassName('.gameStatus');
console.log(statusDisplay);

const resetButton = document.getElementById('clear');

var switchPlayer = 1;

let boxes = []


const container = document.querySelector('.container');
console.log(container)


for (i = 1; i <= 9; i++){
    const box = document.createElement('div')
    box.id = 'box' + i
    boxes.push(box.id)
    box.addEventListener('click',() =>{
        
        console.log('div clicked')
        if(switchPlayer % 2 == true){
            if(box.textContent === 'X' || box.textContent === 'O' || winner == true ){
                return;
            }else{
                box.textContent = 'X';
                box.classList.add('player_x')
                player_x.push(box.id);
                console.log(player_x);
                switchPlayer++;
            }
        } else {
            if(box.textContent === 'X' || box.textContent === 'O' || winner == true ){
                return;
            } else{
                box.textContent = 'O';
                box.classList.add('player_o')
                player_o.push(box.id);
                console.log(player_o);
                switchPlayer++;
            }
        }
        checkWinner();    
    });
    
    container.appendChild(box)
    
}


console.log(container)



// function findingWinner(){
    //        for (i= 0; i <= 1; i++);
    //         if (box.classList.player_x = container.box.id.box1 && container.box.id.box2 && containter.box.id.box3) {
        //                 return true; 
        
        //             } 
        //             console.log(player_x)
        
        
        //         }
            
        
        
        // function findingWinner(){
        //     var boxOneClass = document.getElementById('box1').getAttribute('class');
        //     var boxTwoClass = document.getElementById('box2').getAttribute('class');
        //     var boxThreeClass = document.getElementById('box3').getAttribute('class');
        //     var boxFourClass = document.getElementById('box4').getAttribute('class');
        //     var boxFiveClass = document.getElementById('box5').getAttribute('class');
        //     var boxSixClass = document.getElementById('box6').getAttribute('class');
        //     var boxSevenClass = document.getElementById('box7').getAttribute('class');
        //     var boxEightClass = document.getElementById('box8').getAttribute('class');
        //     var boxNineClass = document.getElementById('box9').getAttribute('class');
        //     // if (boxOneClass === null || boxTwoClass === null || boxThreeClass === null || boxFourClass === null|| boxFiveClass === null|| boxSixClass === null || boxSevenClass === null || boxEightClass === null || boxNineClass === null){
        //     //     console.log(false)
        //     //     return false;
        //     // }
        //     // else{
        //     if  (boxOneClass !== null && (boxOneClass === (boxTwoClass && boxThreeClass))){
        //         console.log(true);  
        //         if (boxOneClass === ('player_x')){
        //             document.getElementById('result').innerHTML = 'Player X wins!' 
        //         } else if (boxOneClass === ('player_o')) {
        //             document.getElementById('result').innerHTML = 'Player O wins!' 
        //         }
        //     } else if (boxThreeClass !== null && (boxThreeClass === (boxFourClass && boxFiveClass))) {
        //         console.log(true);
        //         if (boxThreeClass === ('player_x')){
        //             document.getElementById('result').innerHTML = 'Player X wins!' 
        //         } else if (boxThreeClass === ('player_o')) {
        //             document.getElementById('result').innerHTML = 'Player O wins!' 
        //         }
        //     } else if (boxSevenClass !== null && (boxSevenClass === (boxEightClass && boxNineClass))) {
        //         console.log(true);
        //         if (boxSevenClass === ('player_x')){
        //             document.getElementById('result').innerHTML = 'Player X wins!' 
        //         } else if (boxSevenClass === ('player_o')) {
        //             document.getElementById('result').innerHTML = 'Player O wins!' 
        //         }
        //     } else if (boxOneClass !== null && (boxOneClass === (boxFourClass && boxSevenClass))) {
        //         console.log(true);
        //         if (boxOneClass === ('player_x')){
        //             document.getElementById('result').innerHTML = 'Player X wins!' 
        //         } else if (boxOneClass === ('player_o')) {
        //             document.getElementById('result').innerHTML = 'Player O wins!' 
        //         }
        //     } else if (boxTwoClass !== null && (boxTwoClass === (boxFiveClass && boxSixClass))) {
        //         console.log(true);
        //         if (boxTwoClass === ('player_x')){
        //             document.getElementById('result').innerHTML = 'Player X wins!' 
        //         } else if (boxTwoClass === ('player_o')) {
        //             document.getElementById('result').innerHTML = 'Player O wins!' 
        //         }
        //     } else if (boxThreeClass !== null && (boxThreeClass === (boxSixClass && boxNineClass))) {
        //         console.log(true);
        //         if (boxThreeClass === ('player_x')){
        //             document.getElementById('result').innerHTML = 'Player X wins!' 
        //         } else if (boxThreeClass === ('player_o')) {
        //             document.getElementById('result').innerHTML = 'Player O wins!' 
        //         }
        //     } else if (boxOneClass !== null && (boxOneClass === (boxFiveClass && boxNineClass))) {
        //         console.log(true);
        //         if (boxOneClass === ('player_x')){
        //             document.getElementById('result').innerHTML = 'Player X wins!' 
        //         } else if (boxOneClass === ('player_o')) {
        //             document.getElementById('result').innerHTML = 'Player O wins!' 
        //         }
        //     } else if (boxThreeClass !== null && (boxThreeClass === (boxFiveClass && boxSevenClass))) {
        //         console.log(true);
        //         if (boxThreeClass === ('player_x')){
        //             document.getElementById('result').innerHTML = 'Player X wins!' 
        //         } else if (boxThreeClass === ('player_o')) {
        //             document.getElementById('result').innerHTML = 'Player O wins!' 
        //         }
        //     } 
            
        
        // }


        const winningCombos = [
            ['box1', 'box2', 'box3'],
            ['box4', 'box5', 'box6'],
            ['box7', 'box8', 'box9'],
            ['box1', 'box4', 'box7'],
            ['box2', 'box5', 'box8'],
            ['box3', 'box6', 'box9'],
            ['box1', 'box5', 'box9'],
            ['box3', 'box5', 'box7']
        ];

        let winner = false;


        var player_x = [];
        var player_o = [];

        function checkWinner(){
            for (i = 0; i < winningCombos.length; i++){
                let player_x_match = 0; 
                let player_o_match = 0;
                for (j = 0; j < winningCombos[i].length; j++){
                    if (player_x.includes(winningCombos[i][j])){
                        player_x_match++

                    }
                     if (player_o.includes(winningCombos[i][j])){
                        player_o_match++
                }
                if (player_x_match === 3){
                    winner = true;
                    document.getElementById('result').textContent= 'Player X Won'
                    console.log('Player x has won')
                }
                if (player_o_match === 3){
                    winner = true;
                    document.getElementById('result').textContent= 'Player o Won'
                    console.log('Player o has won')
            }
        }
        }    
    }

    const resetGame = () => {
        player_x = []
        player_o = []
        winner = false;
        document.getElementById('result').textContent= ''
        boxes.map(boxId =>{
          let box =  document.getElementById(boxId);
          box.textContent = '' 

        })
        

    }
    resetButton.addEventListener('click', resetGame)