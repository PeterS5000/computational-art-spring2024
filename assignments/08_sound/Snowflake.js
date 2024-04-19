class Snowflake{
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.pos = createVector(x, y);
            this.vel = createVector(2, 2); 
            this.size = 30;
            this.hue = random(0,359);
            this.saturation = 100;
            this.brightness = 100;
            this.maxSpeed = 30;


    }

    bounce(){
        if(this.pos.x > width || this.pos.x < 0){
            this.vel.x *= -1;
        }
        if(this.pos.y > height || this.pos.y < 0){
            this.vel.y *= -1;
        }


    }
    show(){
        push();
        fill(this.hue, this.saturation, this.brightness);
        ellipse(this.pos.x, this.pos.y, 20, 20); 
        pop();





    }
    update(){
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        // console.log(this.vel.x);
        // console.log(this.pos.x);


    }

}