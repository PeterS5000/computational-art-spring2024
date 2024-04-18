let sound;
let synth; 
let song;
let notes = ['F2', 'E5', 'C5,', 'Bb4', 'D4', 'A1', 'F3'];
let snowflakes = []
let numSnowflakes = 10; 
let numBranches = 20;
let count; 
let randomNotes;
let currentNote = 0; 


function preload(){

song = loadSound("482961__yellowtree__super-strange-synths.wav");
}

function setup(){
    createCanvas(800,600);
    synth = new p5.PolySynth();
    userStartAudio();
    colorMode(HSB);
    for(let i = 0; i <numSnowflakes; i++){
        snowflakes.push(new Snowflake(random(width), random(height)))
    }
}



function draw(){
    background(0, 0, 0); // creates background
    count = 0;
    fill(0,0,100);
    translate(width/2, height/2);
    rotate(frameCount * 0.02);
    ellipse(random(800), random(600), 10, 10);
    
    for (let snowflake of snowflakes){
        snowflake.update();
        snowflake.show();
        snowflake.bounce();
    }
    
}

function playNotes(){
    
    for(let i = 0; i < notes; i++){
        synth.play(i, 1,0,1, 0.25);
        if(notes[i] > notes.length){
            i = 0;
        }

    }


}


function mousePressed(){
    setInterval(playNotes, 200);


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