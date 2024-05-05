class Ball{
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
       this.gameOverSound.play();
       this.gameOverSound.pause(1);
    }
    


}
collide(){
    for(let i = 0; i < balls.length; i++){
        let distance = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y);
        if(distance < this.size + balls[i].size){
            this.vel = p5.Vector.add(balls[i], balls[i+1]);
            this.vel.reflect(-1);

        }
    }




}
show(){
    push();
    fill(this.hue, this.saturation, this.brightness);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 20, 20); 
    pop();





}
update(){
    
    this.pos.add(this.vel);
    // console.log(this.vel.x);
    // console.log(this.pos.x);


}

}