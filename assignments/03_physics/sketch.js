let drops = [];

function setup() {
  createCanvas(800, 400);
  
  for (let i = 0; i < 200; i++) {
    drops.push(new Raindrop());

  }
}

function draw() {
  background(32, 245, 255);
  
  for (let drop of drops) {
    drop.update();
    drop.display();
  }
  
  drawHouse(50, 300, 150, 100);
  drawHouse(250, 300, 150, 100);
  drawHouse(450, 300, 150, 100);
  drawHouse(650, 300, 150, 100);
  fill(0, 255, 0);
  rect(0, 300, 800, 100);
  noStroke();
}

function drawHouse(x, y, width, height) {
  fill(255, 0, 0);
  rect(x, y - height, width, height);
  fill(100);
  triangle(x, y - height, x + width / 2, y - height - 50, x + width, y - height);
  fill(0);
  rect(x + width / 2 - 10, y - 40, 20, 40);
  fill(200);
  rect(x + 20, y - height + 20, 30, 30);
  rect(x + width - 50, y - height + 20, 30, 30);
}

class Raindrop {
    constructor() {
      this.x = random(width); 
      this.y = random(-500, -50); 
      this.speedY = random(5, 10); 
      this.size = random(2, 5);
      this.wind = random(-2, 2); 
      this.color = fill(0,0,255);
    }
    
    update() {
      this.y += this.speedY; 
      this.x += this.wind; 
      
      if (this.y > height) {
        this.y = random(-500, -50);
        this.x = random(width);
      }
      
    
      if (this.x > width) {
        this.x = 0;
      } else if (this.x < 0) {
        this.x = width;
      }
    }
    
    display() {
      stroke(0);
      line(this.x, this.y, this.x, this.y + this.size, this.color);
    }
  }