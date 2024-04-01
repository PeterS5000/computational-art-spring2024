class Vehicle {
    constructor(x, y, target) {

        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector(10, 5);

        this.target = target;
        this.maxSpeed = 20;
        this.maxForce = 0.5;

        this.dim = 0 + random(5);

        this.hue = random(360);
        this.saturation = 100;
        this.brightness = 100; 

        this.range = 100;

        this.mass = 1;

        background(0, 0, 100);
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    seek(target, arrive) {
       
        let desired = p5.Vector.sub(target, this.pos);


        let distance = desired.mag();

        if (arrive && distance < 50) {
            let speed = map(distance, 0, 100, 0, this.maxSpeed);
            desired.setMag(speed);
        } else {
            desired.setMag(this.maxSpeed);
        }

        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);

        this.addForce(steer);
    }

    wrap() {
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }

    getCloseVehicles() {
        let closeVehicles = [];
        for (let vehicle of vehicles) {
            if (vehicle !== this) {
                if (dist(vehicle.pos.x, vehicle.pos.y, this.pos.x, this.pos.y) < this.range) {
                    closeVehicles.push(vehicle);
                }
            }
        }
        return closeVehicles;
    }

    cohesion(closeVehicles) {
        if (closeVehicles.length > 0) {
            let sumPositions = createVector(0, 0);
            for (let vehicle of closeVehicles) {
                sumPositions.add(vehicle.pos);
            }
            sumPositions.div(closeVehicles.length);

            let desired = p5.Vector.sub(sumPositions, this.pos);
            desired.setMag(this.maxSpeed);
            let steeringForce = p5.Vector.sub(desired, this.vel);
            steeringForce.limit(this.maxForce);
            return steeringForce;
            
        }

        return createVector(0,0);
    }

    separation(closeVehicles) {
        let sumOfAnglesToVehicles = createVector(0, 0);
        for (let vehicle of closeVehicles) {
            let dirToVehicle = p5.Vector.sub(vehicle.pos, this.pos);
            sumOfAnglesToVehicles.add(dirToVehicle);
        }
        if (closeVehicles.length !== 0) {
            sumOfAnglesToVehicles.div(closeVehicles.length);
        }
        sumOfAnglesToVehicles.setMag(this.maxSpeed);
        sumOfAnglesToVehicles.mult(-1);
        
        
        let steeringForce = p5.Vector.sub(sumOfAnglesToVehicles, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;
    }

    alignment(closeVehicles) {
        let sumOfVelocities = createVector(0, 0);
        for (let vehicle of closeVehicles) {
            sumOfVelocities.add(vehicle.vel);
        }
        if (closeVehicles.length > 0) {
            sumOfVelocities.div(closeVehicles.length);
        }
        sumOfVelocities.setMag(this.maxSpeed);
        
        
        let steeringForce = p5.Vector.sub(sumOfVelocities, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;
    }



    update() {
        if (mouseIsPressed) {
            let mousePos = createVector(mouseX, mouseY);
            this.seek(mousePos);
            this.maxSpeed = 100; 
        } else {
            let closeVehicles = this.getCloseVehicles();
          
            let cohesionForce = this.cohesion(closeVehicles);
            cohesionForce.mult(1);
            this.addForce(cohesionForce);

            let separationForce = this.separation(closeVehicles);
            separationForce.mult(1);
            this.addForce(separationForce);

            let alignmentForce = this.alignment(closeVehicles);
            let n = noise(frameCount * 0.1);
           
            alignmentForce.mult(n);
            this.addForce(alignmentForce);
        }

        this.dim = map(this.pos.y, 0, height, 2, 20)


        
        this.vel.add(this.acc); 
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel); 

        this.acc.set(0,0);
    }

    slowMode(){
        if (this.pos.x > width/2){
            this.maxSpeed=1;
        }
        if(this.pos.y > height/2){
                this.maxSpeed = 1; 

        }

        



    }

    show() {
        push();

        translate(this.pos.x, this.pos.y);

       
        let angle = this.vel.heading();
        rotate(angle);

        fill(this.hue, this.saturation, this.brightness);

        
        beginShape();
        vertex(this.dim, 0);
        vertex(-this.dim, this.dim/2);
        vertex(-this.dim, -this.dim/2);
        endShape(CLOSE);

        pop();
    }
}