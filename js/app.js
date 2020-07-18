console.log('Hello frontend');

// function moveO (element) {
//     element.textContent = "o"
//     console.log('o')
// }

document.addEventListener('DOMContentLoaded', function() {
    leftTop = document.getElementById('left-top');
    leftTop.addEventListener('click', function(event) {
        leftTop.textContent = 'o' 
        console.log('o')
    });
})