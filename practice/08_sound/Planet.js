class Planet{
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.size = 30;
            this.hue = random(0,359);
            this.saturation = 100;
            this.brightness = 100;


    }
    show(){
        push();
        fill(this.hue, this.saturation, this.brightness);
        ellipse(x, y, this.size, this.size);




    }

}