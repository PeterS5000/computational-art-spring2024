let fireworks = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 100; i++) {
    fireworks.push(new Firework());
  }
}

function draw() {
  background(0);
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

class Firework {
  constructor() {
    this.x = random(width);
    this.y = height;
    this.explodeHeight = random(height / 2); 
    this.exploded = false;
    this.particles = [];
  }

  update() {
    if (!this.exploded) {
      this.y -= random(5, 10);
      if (this.y <= this.explodeHeight) {
        this.explode();
      }
    }
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  show() {
    if (!this.exploded) {
      noStroke();
      fill(255);
      ellipse(this.x, this.y, 4, 4);
    }
    for (let particle of this.particles) {
      particle.show();
    }
  }

  explode() {
    this.exploded = true;
    for (let i = 0; i < 100; i++) {
      this.particles.push(new Particle(this.x, this.y));
    }
  }

  done() {
    return this.exploded && this.particles.length === 0;
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocityX = random(-2, 2);
    this.velocityY = random(-5, -1);
    this.alpha = 255;
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.alpha -= 3;
  }

  show() {
    noStroke();
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(this.x, this.y, 20, 20);
  }

  done() {
    return this.alpha <= 0;
  }
}