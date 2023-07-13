const section = document.querySelector('section');

const container = document.createElement('div');
container.setAttribute('id', 'grid');
container.style.height = '500px';
container.style.aspectRatio = 1 / 1;
section.appendChild(container);

const gridNumber = 10;
// const gridHeight = document.getElementById('grid').style.height;
// console.log(gridHeight);
for (i = 0; i < gridNumber **2; i++) {
        const row = document.createElement('div');
        row.style.border = 'thin dotted black';
        row.style.height = parseInt(container.style.height) / gridNumber + 'px';
        row.style.aspectRatio = 1 / 1;
        console.log(row.style.height);
        row.setAttribute('id', 'row');
        container.appendChild(row);
    }

// for (i = 0; i < gridNumber; i++) {
//     const grid = document.createElement('div');
//     grid.style.border = 'thin dotted black';
//     grid.setAttribute('id', 'column');
//     container.appendChild(grid);
// }
