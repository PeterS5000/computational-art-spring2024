let img;
let vehicles = [];
let numVehicles = 100;
let target;
let count = 0;
let randomBranch; 



function setup() {
  createCanvas(600, 600);
  
  colorMode(HSB);  
  target = createVector(mouseX, mouseY);
  for(let i = 0; i < numVehicles; i++) {
    vehicles.push(new Vehicle(random(width), random(height), target));
  }

  
}


function draw() {
  background(0, 0, 0, 0.01);
  

  target.x = mouseX; 
  target.y = mouseY;

  ellipse(target.x, target.y, 10, 10);
  ellipse(target.x+200, target.y+100, 10, 10);
  ellipse(random(600), random(600), 5, 5);

  for (let vehicle of vehicles) {
    vehicle.update();
    vehicle.show();
    vehicle.seek(target); 
    vehicle.slowMode(); 
    vehicle.wrap();
  }
  
  

}



