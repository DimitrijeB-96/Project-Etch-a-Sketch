const canvas = document.querySelector('.canvas');

const changeSizeBtn = document.querySelector('.change-size');
const changeSizeInput = document.querySelector('.get-size');

const messageDiv = document.querySelector('.message-div');
const message = document.querySelector('.message');
messageDiv.appendChild(message);
let defaultGridSize = 16;
let inputValue;

let color = 'white';

const defaultColor = document.querySelector('.default-color');
defaultColor.addEventListener('click', () => {
    color = 'white';
});

const rainbowColor = document.querySelector('.rainbow-color');
rainbowColor.addEventListener('click', () =>{
    color = 'rainbow';
});

function createEachSquare() {
    let square = document.createElement('div');
    square.className = 'square';
    square.classList.add('square-background-color');
    canvas.appendChild(square);
    square.addEventListener('mouseover', () => {
        if (color == 'rainbow') {
            square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            square.style.backgroundColor = 'white';
        }
    });
}

createGrid(defaultGridSize);

function createGrid(size) {
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let gridSize = size * size;

    for (let i = 0; i < gridSize; i++) {
        createEachSquare();
    }
}



changeSizeBtn.addEventListener('click', () => { 
    inputValue = changeSizeInput.value;
    if (inputValue == '') {
        message.textContent = "Please enter a number";
    } else if (inputValue <= 0 || inputValue > 100) {
        message.textContent = "Please enter number from 1 to 100";
    } else {
        message.textContent = `Size of grid is ${inputValue} x ${inputValue}`;
        createGrid(inputValue);
    }
});

const resetBtn = document.querySelector('.reset-btn');
const eachSquare = document.querySelector('.square');

resetBtn.addEventListener('click', () => {
    if (inputValue !== defaultGridSize) {
        createGrid(defaultGridSize);
    }
    let allSquares = document.querySelectorAll('.square');
    allSquares.forEach(eachSquare => eachSquare.style.backgroundColor = '#1a1a1a');
    message.textContent = `Size of grid is ${defaultGridSize} x ${defaultGridSize}`;
});





