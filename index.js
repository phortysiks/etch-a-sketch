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

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.background = 'rgb(13, 53, 54)';
  });
})

const reload = document.getElementById('reload');

function reloadGrid() {
  gridItems.forEach((item) => {
    item.style.background = 'none';
  });
}

reload.onclick = function() {
  reloadGrid()
};

let slider = document.querySelector('.slider');
let sizeLabel = document.querySelector('.size-label');
sizeLabel.textContent = `${slider.value}x${slider.value}`;
slider.oninput = function() {
  sizeLabel.textContent = `${this.value}x${this.value}`;
};
slider.onmouseup = function() {
  reloadGrid();
  createGrid(this.value);
};