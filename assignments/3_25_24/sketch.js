function setup(){
  createCanvas(800,600);
  colorMode(HSB);
  background(0, 0, 100)
  translate(width/2, height)
  branch(150); 

}

function draw(){
  background(0,0,100); // creates background
}

function branch(l){
  line(0, 0, 0, -1); 
  translate(0, -l); 
  l = l * 0.8
  if (l > 5){
    push();
    rotate(radians(-45));
    pop();

  }

}

function drawCircle(x, y, w){
  count = 0; 

  console.log(count); 
  stroke(map(count, 0, 10000, 0, 360), 60, 100);
  ellipse(x, y, w);
  count++; 

  if(w > 1){
    drawCircle(x, y, w/2);
    drawCircle(x/2, y/2, w/2);
    drawCircle(x/1.1, y/4, w/2);

     
  }
  


}
