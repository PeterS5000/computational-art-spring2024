class Snowflake{
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.pos = createVector(x, y);
            this.vel = createVector(10, 10); 
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
        translate(width/2, height/2);
        fill(this.hue, this.saturation, this.brightness);
        
        for(let i = 0; i < numBranches; i++){
            push();
            translate(random(width, random(height)));
            let angle = map(i, 0, numBranches, 0, (2*PI));
            rotate(angle);
            drawBranches(50);
            pop();
       }
       
       pop();




    }
    update(){
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);


    }

}