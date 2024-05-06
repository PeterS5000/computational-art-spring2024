let sphere;

function setup() {
    createCanvas(400, 400, WEBGL);
    sphere = new Sphere(0, 0, 0);
}

function draw() {
    background(0);
    sphere.update();
    sphere.show();
}

class Sphere {
    constructor(x, y, z) {
        this.pos = createVector(x, y, z);
        this.vel = p5.Vector.random3D();
        this.size = 30;
        this.hue = random(0, 359);
        this.saturation = 100;
        this.brightness = 100;
    }

    show() {
        push();
        fill(this.hue, this.saturation, this.brightness);
        translate(this.pos.x, this.pos.y, this.pos.z);
        sphere(this.size);
        pop();
    }

    update() {
        this.pos.add(this.vel);
    }
}