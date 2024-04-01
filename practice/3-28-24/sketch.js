let count = 0; 
let segment= []; 


function setup(){
    createCanvas(800,600);
    colorMode(HSB);
    rectMode(CENTER); 
    noFill(); 
    

}



function draw(){
    background(0,0,0); // creates background
   count = 0;
   push();
   translate(width/2, height/2);
   scale(map(noise(frameCount*0.002), 0, 1, 1, 5)); 
   rotate(frameCount * 0.01); 
   drawCircles(0 ,0 , 400);
   pop();
   
}

function drawCircles(x, y, diameter){
    count++; 

    let h = map(count +frameElement, 0, 24, 0, 360)%360; 
    stroke(h, 50, 100);
    if(count % 2 === 0){
        ellipse(x,y,diameter);
        
        
    }
    else{
        rect(x, y, diameter); 


    }
    if (diameter > 1){
        drawCircles(x, y, diameter/map(sin(frameCount*0.01), -1, 1, 1.1, 2));
        
    }
    else{
        console.log(count); 

    }


}
