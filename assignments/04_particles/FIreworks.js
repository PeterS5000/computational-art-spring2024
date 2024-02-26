class Fireworks{
    constructor(){
        this.x = random(0,800); 
        this.y = 0;
        this.index = index;
    }
    
    move(){
        this.x = this.x + random(0, 5);
        this.y = this.y + random(0, 5);   
    }

    show(){
        noStroke();
        fill(random(0,255));
    }

}
