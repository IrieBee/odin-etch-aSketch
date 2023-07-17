const section = document.querySelector('section');
const container = document.createElement('div');
container.setAttribute('id', 'grid');
container.style.height = '500px';
section.appendChild(container);


// Prompt user for number of grids
// ANOTHER VERSOIN 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>
document.querySelector('.button').addEventListener('click', () => {
    document.querySelector('div').value = 0;
    do {
        promptNumber = parseInt(prompt("Number of squares per side (1 - 100): "), 10);
        console.log(promptNumber);
    }
    while (promptNumber < 1 || promptNumber >= 100 || isNaN(promptNumber)); 
    gridNumber = promptNumber;
    // console.log(gridNumber);

    // return gridNumber;// Create grid of small squares
    const gridHeight = parseInt(container.style.height, 10) / gridNumber + 'px';
    let row;
    for (let i = 0; i < gridNumber **2; i++) {
        row = document.createElement('div');
        row.style.height = gridHeight;
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
});
// location.reload();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++->

//____________________________________________________________________________________
//WORKING WHILE LOOP
//
// let promptNumber = 16;

// do {
//     promptNumber = parseInt(prompt("Number of squares per side (1 - 100): "), 10);
//     console.log(typeof promptNumber);
// }
//  while (promptNumber < 1 || promptNumber >= 100 || isNaN(promptNumber)); 

// const gridNumber = promptNumber;
// //-------------------------------------------------->

// // Create grid of small squares
// const gridHeight = parseInt(container.style.height, 10) / gridNumber + 'px';
// let row;
// for (let i = 0; i < gridNumber **2; i++) {
//     row = document.createElement('div');
//     row.style.height = gridHeight;
//     // console.log(row.style.height);
//     row.setAttribute('class', 'row');
//     container.appendChild(row);
// }

// // Add querySelectorAll to draw on all grids
// const drawing = document.querySelectorAll('.row');
// drawing.forEach ((box) => {
//     box.addEventListener('mouseover', () => {
//         box.style.backgroundColor = 'hsl(280, 10%, 25%)';
//     })
// })
//___________________________________________________________________________________
