const gridSize = 256;
chooseGridSize();

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

    for(let i = 0; i < eachDiv.length; i++) {
        eachDiv[i].addEventListener('mouseover', () => {
            eachDiv[i].classList.add('yellow');
        });
    }
}

function chooseGridSize()  {
    const gridSizeBtn = document.createElement('button');
    gridSizeBtn.setAttribute('class', 'grid-size-button');
    gridSizeBtn.textContent = 'set size';
    document.body.appendChild(gridSizeBtn);

    addEventListener('click', () => {
        //alert();
    });
}




