const gridSize = 256;

const buttonsDiv = document.createElement('div');
const gridSizeBtn = document.createElement('button');
const resetColorBtn = document.createElement('button');
const redColorBtn = document.createElement('button');
const blueColorBtn = document.createElement('button');
const yellowColorBtn = document.createElement('button');
const greenColorBtn = document.createElement('button');

buttons();

//function that make div with buttons
function buttons() {
    
    //create and append div
    document.body.appendChild(buttonsDiv);

    //create and append gridSize button
    gridSizeBtn.setAttribute('class', 'grid-size-button');
    gridSizeBtn.textContent = 'Set Size';
    buttonsDiv.appendChild(gridSizeBtn);

    //create and append resetColor button
    resetColorBtn.setAttribute('class', 'reset-color-button');
    resetColorBtn.textContent = 'Reset';
    buttonsDiv.appendChild(resetColorBtn);

    //creating div for buttons that sets the color
    const colorDiv = document.createElement('div');
    buttonsDiv.appendChild(colorDiv);

    //red
    redColorBtn.setAttribute('class', 'red');
    redColorBtn.textContent = 'Red';
    colorDiv.appendChild(redColorBtn);

    //blue
    blueColorBtn.setAttribute('class', 'blue');
    blueColorBtn.textContent = 'Blue';
    colorDiv.appendChild(blueColorBtn);

    //green
    greenColorBtn.setAttribute('class', 'green');
    greenColorBtn.textContent = 'Green';
    colorDiv.appendChild(greenColorBtn);

    //yellow
    yellowColorBtn.setAttribute('class', 'yellow');
    yellowColorBtn.textContent = 'Yellow';
    colorDiv.appendChild(yellowColorBtn);

}

//Main div container for grid
const mainDiv = document.createElement('div');
mainDiv.className = 'container';
document.body.appendChild(mainDiv);

//calling function that will "make" a grid
createGrid(gridSize);

//calling function that will change color of a mousedover square
selectSquare();

//functon that makes div "square"
function divBoxInsideGrid() {
    let box = document.createElement('div');
    box.setAttribute('class', 'box');
    mainDiv.appendChild(box);
}

//fucntion that makes a grid out of "squares" made in divBoxInsideGrid function
function createGrid(gridSize) {
    for( let i = 0; i < gridSize; i++) {
        divBoxInsideGrid();
    }
}

function selectSquare() {
    let eachDiv = document.querySelectorAll('.box');
    let whichColor = 'white-color';

    if (document.getElementsByName(redColorBtn).clicked == true) {
        redColorBtn.addEventListener('click', () => {
            whichColor = 'red-color';
        });
    }
    


    for(let i = 0; i < eachDiv.length; i++) {
        eachDiv[i].addEventListener('mouseover', () => {
            eachDiv[i].classList.add(whichColor);
        });

        //Reset button click removes yellow class from "squares"
        resetColorBtn.addEventListener('click', () => {
            eachDiv[i].classList.remove(whichColor);
        });
    }
}

// EVENTS //

gridSizeBtn.addEventListener('click', () => {
    alert();
});

redColorBtn.addEventListener('click', () => {

});

blueColorBtn.addEventListener('click', () => {

});

yellowColorBtn.addEventListener('click', () => {

});

greenColorBtn.addEventListener('click', () => {

});




