console.log('Hello frontend');

// function moveO (element) {
//     element.textContent = "o"
//     console.log('o')
// }

document.addEventListener('DOMContentLoaded', function() {
    let moves = 0;
    // if (moves % 2 === 0 && moves < 9) {  <- x/o logic
        // square.textContent = 'o' 
    // } else {
        // square.textContent = 'x' 
    // }
    leftTop = document.getElementById('left-top');
    leftTop.addEventListener('click', function(event) {
        leftTop.textContent = 'o' 
        console.log('o');
        moves++;
    });
})