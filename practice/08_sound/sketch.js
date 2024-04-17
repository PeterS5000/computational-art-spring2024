let sound;
let synth; 
let song;
let LoopInterval = 1;
let planets = []
let numPlanet 
let numBranches = 20;
let count; 


function preload(){

song = loadSound("482961__yellowtree__super-strange-synths.wav");
}

function setup(){
    createCanvas(800,600);
    loop = new p5.SoundLoop(soundLoop, LoopInterval);
    colorMode(HSB);
    for(let i = 0; i <planets; i++){
        planets.push


    }
}



function draw(){
    background(0, 0, 0, 0.1); // creates background
    count = 0;
    fill(0,0,100);
    push();
    translate(random(width),  random(height));
    rotate(frameCount * 0.02);
    ellipse(random(800), random(600), 5, 5);
    for(let i = 0; i < numBranches; i++){
        push();
        let angle = map(i, 0, numBranches, 0, (2*PI));
        rotate(angle);
        drawBranches(50);
        pop();
   }
   pop();
    
}

function mousePressed(){
    userStartAudio();
    song.play();


}

function soundLoop(timeFromNow){
    


}


function drawBranches(l){
    count++;

    strokeWeight(5);
    stroke(0, 0, 100);
    line(0,0,0,-l);
  
    translate(0, -l);
  
    l = l * 0.6;
  
    if (l > 4) {
      push();
      rotate(radians(-50));
      map(sin(frameCount*0.01), -1, 1, 1.01, 4);
      
      drawBranches(l);
      pop();
  
      push();
      rotate(radians(50));
      drawBranches(l);
      
      pop();
      console.log(count);
    } 
}