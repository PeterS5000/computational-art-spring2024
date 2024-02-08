// let numCircles = 100;

// function setup() {
//   createCanvas(400, 300);
//   colorMode(HSB);
//   noStroke();
// }

// function draw() {
//   background(0, 0, 0);

//   for (let i = 0; i < numCircles; i++) {
//     let x = map(i, 0, numCircles, 0, width);
//     let hue = map(mouseX, 0, width, 0, 360);
     
//     let mouseYmapped = map(mouseY, 0, height, 100, 300);
//     let tallness = map(noise(x / 50, mouseY / 50), 0, 1, mouseYmapped - 50, mouseYmapped + 50);

//     fill(hue, 80, 100);
//     ellipse(x, height / 2, width / numCircles, tallness);
//   }
// }

let zoom = 100;

function setup() {
  createCanvas(900, 900);
  background(400);
  noStroke();
}

function draw() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let noiseValue = noise(x / zoom, y / zoom);
      let pixelColor;
      if (noiseValue < 0.1) {
    
        pixelColor = color(123, 255, 122);

      } 
      else if ( noiseValue < 0.2) {
        pixelColor = color(122, 96, 50);

      } 
      else if (noiseValue < 0.3){
        pixelColor = color(0, 0, 255);
      }
      else if (noiseValue <0.4){
        pixelColor = color (120,72,84);
      }
      else if (noiseValue <0.5){
        pixelColor = color (120,100,210);
      }
      else if (noiseValue <0.6){
        pixelColor = color (210,210,100);
      }
      else if (noiseValue <0.7){
        pixelColor = color (11,100,255);
      }
      else if (noiseValue <0.8){
        pixelColor = color (255,0,255);
      }
      else if (noiseValue <0.8){
        pixelColor = color (150,250,150);
      }
      else{
        pixelColor = color(30, 255, 175);
      }
      set(x, y, pixelColor);
    }
  }
  updatePixels();
}
// function setup(){
//   createCanvas(600,400);
//   colorMode(HSB);

// }
// function draw(){
//   background(0,0,100);

//   push();
//   translate(width/2, height/2);
//   let xoff = 0;
//   fill(0);
//   beginShape();
//   let baseRadius = 0;
//   for(let theta = 0; theta < 2 * PI; theta+=0.01){
//     let radius = 100 + random(-5,5);
//     let x = radius * cos(theta);
//     let y = radius * sin(theta);
//     vertex(x,y);

//     xoff += 0.2;
//     baseRadius += 0.1;
//   }

//   pop();

//   stroke(0);
//   ellipse(0,0,200,200);

//   noLoop();
// }
