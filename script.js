const container = document.querySelector('#container');
container.style.height = '500px';

// Create initial grid with 16 squares per side
let gridNumber = 16;
const gridHeight = parseInt(container.style.height, 10) / gridNumber + 'px';
console.log(gridHeight);
let grid;
for (let i = 0; i < gridNumber **2; i++) {
    grid = document.createElement('div');
    grid.style.height = gridHeight;
    grid.setAttribute('class', 'grid');
    container.appendChild(grid);
}

// Draw
const drawing = document.querySelectorAll('.grid');
drawing.forEach ((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'hsl(280, 10%, 25%)';
    })
})

// Listen for button
document.querySelector('.button').addEventListener('click', () => {
// Delete previous grid
    const removeGrid = document.getElementById("container");

    while (removeGrid.hasChildNodes()) {
    removeGrid.removeChild(removeGrid.firstChild);
    }

// Prompt user for number of squares
    do {
        promptNumber = parseInt(prompt("Number of squares per side (1 - 100): "), 10);
        console.log(promptNumber);
    }
    while (promptNumber < 1 || promptNumber >= 100 || isNaN(promptNumber)); 
    gridNumber = promptNumber;
    console.log(gridNumber);

// Make new grid
    const gridHeight = parseInt(container.style.height, 10) / gridNumber + 'px';
    console.log(gridHeight);
    let grid;
    for (let i = 0; i < gridNumber **2; i++) {
        grid = document.createElement('div');
        grid.style.height = gridHeight;
        grid.setAttribute('class', 'grid');
        container.appendChild(grid);
    }

// Draw
    const drawing = document.querySelectorAll('.grid');
    drawing.forEach ((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'hsl(280, 10%, 25%)';
        })
    })
})
