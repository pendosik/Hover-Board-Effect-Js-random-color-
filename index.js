const board = document.querySelector('#board')
const SQUARES_NUMBER =  500

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(e) {
    const color = getRandomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    square = "#" + randomColor;
    return square
}

  
/*
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor; 
    */
    
