let sound;
let synth; 
let song;
let LoopInterval = 1;
let planets = []
let numPlanets = 10;


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
    fill(0,0,100);
    ellipse(random(800), random(600), 5, 5);
    
}

function mousePressed(){
    userStartAudio();
    song.play();


}

function soundLoop(timeFromNow){
    


}
