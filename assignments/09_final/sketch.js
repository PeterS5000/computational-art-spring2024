let song;
let balls = [];
let lines = [];
let spheres = [];
let numBalls = 4; 
let numLines = 1;
let numSpheres = 1; 
let count; 
let target; 
let yPositionOne;
let yPositionTwo;
let lineOne;
let lineTwo;
let angle;
let playing = false;
let arcadeBackground;
let gameOverSound;
let gameOver = false;



function preload(){
    arcadeBackground = loadImage("./images/arcadeBackground.png");
    gameOverSound = loadSound("./sounds/gameOver.wav");
    homeScreenSound = loadSound("./sounds/Music.mp3");
}

function setup(){
    createCanvas(800,600);
    colorMode(HSB);
    imageMode(CENTER);
    video = createCapture(VIDEO);
    video.size(800, 600);
    video.hide();
    target = createVector(0, mouseY);
    for(let i = 0; i <numBalls; i++){
       balls.push(new Ball(random(width/2), random(height/2)));
    }
   
    background(0,0,0); 
    
}



function draw(){
    if(playing){
        background(0, 0, 0); // creates background
        push();
        homeScreenSound.pause();
        scale(map(noise(frameCount * 0.001), 0, 1, 1, 2));
        rotate(frameCount * 0.001);
        image(arcadeBackground, 400, 300);
        pop();
        
        count = 0;
        stroke('blue');
        strokeWeight(10);
        yPositionOne = mouseY;
        line(0, yPositionOne, 0, yPositionOne +100);
        yPositionTwo = mouseY; 
        line(800, yPositionTwo, 800, yPositionTwo +100);
        for (let ball of balls){
            ball.update();
            ball.show();
            ball.bounce();
            
        }
    }
    if(homeScreenSound.isPlaying()){
        homeScreenSound.pause();
    }
   
    
    if(gameOver === true){
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(30);
        text("GAME OVER", width/2, height/2);
    }
   
    
    
    if(!playing){
        push();
        image(video, 400, 300, width, height);
        
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(30);
        text("Click to play", width/2, height/2);
        homeScreenSound.play();
        
    }
    
    
   
    
}

function mousePressed(){
    if(!playing){
    playing = true;
    }

}



