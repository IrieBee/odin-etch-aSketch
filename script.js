const section = document.querySelector('section');

const container = document.createElement('div');
container.setAttribute('id', 'grid');
container.style.height = '500px';
section.appendChild(container);

// Add prompt from user
const gridNumber = 20;
// Prompt user for number of grids
let promptNumber = prompt("Number of grids per side (max 100): ");

// Create grid of small squares
const gridHeight = parseInt(container.style.height) / gridNumber + 'px';
let row;
for (let i = 0; i < gridNumber **2; i++) {
    row = document.createElement('div');
    row.style.height = gridHeight;
    // console.log(row.style.height);
    row.setAttribute('class', 'row');
    container.appendChild(row);
}

// Add querySelectorAll to draw on all grids
const drawing = document.querySelectorAll('.row');
drawing.forEach ((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'hsl(280, 10%, 25%)';
    })
})

