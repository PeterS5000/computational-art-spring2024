let numCellsWidth = 100;
let numCellsHeight = 100;
let cellWidth;
let cellHeight;
let globalOffsetX = 0; 
let globalOffsetY = 0;
function setup() {
  createCanvas(600, 400);
  colorMode(HSB);


  cellWidth = width / numCellsWidth;
  cellHeight = height / numCellsHeight;
}

function draw() {
  background(0, 0, 100);
  drawGrid()
  globalOffsetX += 0.1;
  globalOffsetY += 0.1;
}

function drawGrid() {
  for (let xIndex = 0; xIndex < numCellsWidth; xIndex++) {
    for (let yIndex = 0; yIndex < numCellsHeight; yIndex++) {
      let x = cellWidth * xIndex;
      let y = cellHeight * yIndex;
      
      push();

      translate(x, y);

      let hue = map(noise(x*0.01 + globalOffsetX , y*0.01 + globalOffsetY), 0, 1, 0, 200);
      fill(hue, 150, 200);
      rect(0, 0, cellWidth, cellHeight);
      let colorOffset = 20;

      hue = (hue + 180 - colorOffset) % 360;
      fill(hue, 150, 200);
      noStroke();
      ellipse(cellWidth/2, cellHeight/2, cellWidth, cellHeight);

      hue = (hue + colorOffset * 2) % 360;
      fill(hue, 150, 200);
      ellipse(cellWidth/2, cellHeight/2, cellWidth/2, cellHeight/2);

      pop();
    }
  }
}