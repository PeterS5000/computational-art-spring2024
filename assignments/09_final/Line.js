class Line{
    constructor(x, y, yPositionOne, yPositionTwo){
        this.x = x;
        this.y = y;
        this.pos = createVector(0, 300);
        this.vel = createVector(0,mouseY);
        this.maxSpeed = 10;
        this.hue = random(359); 
        this.x1Size = createVector(0, yPositionOne);
        this.y1Size = createVector(x, yPositionOne);
        this.x2Size = createVector(800, yPositionTwo); 
        this.y2Size = createVector(x, yPositionTwo);



    }

    show(){
        push();
        fill(this.hue, 100, 100);
        strokeWeight(10);
        // lineOne = line(this.x1Size.x, this.y1Size.y, this.x2Size.x, this.y1Size.y + 100);
        // lineTwo = line(this.x2Size.x, this.y2Size.y, this.x2Size.x, this.y2Size.y + 100);

        pop();
    }
}