const mainGrid = document.querySelector('.main-grid');

function createGrid(size) {
  for (let i = 1; i <= (size*size); i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    mainGrid.appendChild(gridItem);
  }
  mainGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  mainGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

createGrid(64);