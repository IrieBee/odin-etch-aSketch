const section = document.querySelector('section');

const container = document.createElement('div');
container.setAttribute('id', 'grid');
section.appendChild(container);

const gridNumber = 16;
for (i = 0; i < gridNumber; i++) {
        const row = document.createElement('div');
        row.style.border = 'thin dotted black';
        row.setAttribute('id', 'row');
        container.appendChild(row);
    }

// for (i = 0; i < gridNumber; i++) {
//     const grid = document.createElement('div');
//     grid.style.border = 'thin dotted black';
//     grid.setAttribute('id', 'column');
//     container.appendChild(grid);
// }
