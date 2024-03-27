let vehicles = [];
let numVehicles = 100;
let target;
let count = 0;
let randomBranch; 


function setup() {
  createCanvas(600, 600);

  colorMode(HSB);
  noStroke();
  
  target = createVector(width/4, height/2);
  for(let i = 0; i < numVehicles; i++) {
    vehicles.push(new Vehicle(random(width), random(height), target));
  }

  randomBranch = random(); 
}

function draw() {
  background(217, 100, 100, 0.5);

  target.x = mouseX; 
  target.y = mouseY;

  ellipse(target.x, target.y, 10, 10);

  for (let vehicle of vehicles) {
    vehicle.update();
    vehicle.show();
    vehicle.wrap();
  }

//   fill(0, 0, 100);
//   rect(0, 0, width, 20);
  branch(400); 
}

function branch(l){
    strokeWeight(1);
    line(0,0,0,-l);
  
    translate(0, -l);
  
    l = l * 0.6;
  
    if (l > 4) {
      push();
      rotate(radians(-45 + map(noise(frameCount * 0.01), 0, 1, -2, 2)));
      branch(l);
      pop();
  
      push();
      rotate(radians(45 + map(noise(frameCount + 100) * 0.01, 0, 1, -2, 2)));
      branch(l);
      pop();
    } else {
      // fill(random(360), 60, 100);
      // noStroke();
      ellipse(0, 0, 50);
    }
  }

