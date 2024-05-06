class Sphere{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z; 
        this.pos = createVector(x, y);
        this.vel = createVector(4,4); 
        this.size = 30;
        this.hue = random(0,359);
        this.saturation = 100;
        this.brightness = 100;
        this.gameOverSound = loadSound("./sounds/gameOver.wav");
    }

    bounce(){
        if (this.pos.x > 0 && this.pos.x < 0 + 10 && this.pos.y > yPositionOne && this.pos.y < yPositionOne + 100) {
            this.vel.x *= -1;
        }
        if (this.pos.x > 800 - 10 && this.pos.x < 800 && this.pos.y > yPositionTwo && this.pos.y < yPositionTwo + 100) {
            this.vel.x *= -1;
        }
        if(this.pos.y > height || this.pos.y < 0){
            this.vel.y *= -1;
        }
        if(this.pos.x > width || this.pos.x < 0){
            gameOver = true;
            
           this.gameOverSound.play();
           this.gameOverSound.pause(1);
           balls = []; 
           push();
           background(0);
           textAlign(CENTER, CENTER);
           fill(255);
           noStroke();
           text("GAME OVER", width/2, height/2);
           pop();
        }
        
    
    
    }
    // collide(){
    //     for(let i = 0; i < balls.length; i++){
    //         let distance = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y);
    //         if(distance < this.size + balls[i].size){
    //             this.vel = p5.Vector.add(balls[i], balls[i+1]);
    //             this.vel.reflect(-1);
    
    //         }
    //     }
    
    
    
    
    // }
    show(){
        push();
        fill(this.hue, this.saturation, this.brightness);
        noStroke();
        fill(this.hue, this.saturation, this.brightness);
        rotateX(angle);
        rotateY(angle);
        rotateZ(angle);
        sphere();
        angle += 0.09;
        pop();
    
    
    
    
    
    }
    update(){
        
        this.pos.add(this.vel);
        // console.log(this.vel.x);
        // console.log(this.pos.x);
    
    
    }
    
    }
