let dots = [];
let numDots = 100;

function setup(){
    createCanvas(800,600);
    colorMode(HSB);

    for (let i = 0; i < numDots; i++){
        let x = width / numDots * i;
        let diamter = 10;
        dots[i] = new Dot(x, height/2)
    }
}

class Dot {
  constructor(x,y,diameter){
      this.position = createVector(x, y);
      this.velocity = createVector(x, y);
      this.x = x;
      this.y = y;
      this.diamter = diameter;
      this.hue = random(360);

  }
  update(){
      let vectorToMouse = createVector(mouseX - this.position.x - mouseY - this.position.y);
      this.position.add(this.velocity);
      fill(this.hue, 50, 100);
      ellipse(this.position.x, this.position.y, this.diamter, this.diamter);

  }
}

function draw(){
    background(0,0,100);
    dots.update();
    for(let i = 0; i < dots.length; i++) {
        dots[i].update();
    }
}

