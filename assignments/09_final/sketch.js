let song;
let balls = [];
let lines = [];
let numBalls = 10; 
let numLines = 1;
let count; 
let target; 
let yPositionOne;
let yPositionTwo;
let lineOne;
let lineTwo;
let playing = false;
let arcadeBackground;
let GameOverSound;


function preload(){
    arcadeBackground = loadImage("./images/arcadeBackground.png")
    gameOverSound = loadSound("./sounds/gameOver.wav")

}

function setup(){
    createCanvas(800,600);
    colorMode(HSB);
    imageMode(CENTER);
    target = createVector(0, mouseY);
    for(let i = 0; i <numBalls; i++){
       balls.push(new Ball(random(width), random(height)));
    }
    background(0,0,0); 
    
}



function draw(){
    background(0, 0, 0); // creates background
    image(arcadeBackground, 400, 300);
    
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
        ball.collide();
    }
    
    
    
}



