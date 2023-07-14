const section = document.querySelector('section');

const container = document.createElement('div');
container.setAttribute('id', 'grid');
container.style.height = '500px';
container.style.aspectRatio = 1 / 1;
section.appendChild(container);

// Add prompt from user
const gridNumber = 20;
// const gridNumber = document.querySelector(.button);
// gridNumber = addEventListener('click', () => {
//     alert()
// })


// Create grid of small squares
const gridHeight = parseInt(container.style.height) / gridNumber + 'px';
let row = undefined;
for (let i = 0; i < gridNumber **2; i++) {
    row = document.createElement('div');
    row.style.height = gridHeight;
    // row.style.aspectRatio = 1 / 1;
    console.log(row.style.height);
    row.setAttribute('class', 'row');
    container.appendChild(row);
}

// Add querySelectorAll to draw on all grids
const drawing = document.querySelectorAll('.row');
console.log(drawing);
drawing.forEach ((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'hsl(280, 10%, 25%)';
    })
})

