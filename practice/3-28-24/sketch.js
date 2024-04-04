let count = 0; 
let segment= []; 


function setup(){
    createCanvas(800,600);
    colorMode(HSB);
    rectMode(CENTER); 
    // noFill(); 
    

}



function draw(){
    background(0,0,0);
   count = 0;
   push();
   translate(width/2, height/2);
   scale(map(noise(frameCount*0.04), 0, 10, 1, 10)); 
   rotate(frameCount * 0.02); 
   drawCircles(0 ,0 , 400);
   pop();
   
}

function drawCircles(x, y, diameter){
    count++; 

    let h = map(count +frameElement, 0, 24, 0, 360)%360; 
    stroke(h, 100, 100);
    if(count % 2 === 0){
        // noFill();
        ellipse(x,y,diameter);
        
        
    }
    else{
        triangle(x, y, diameter); 


    }
    if (diameter > 19){
        fill(random(365), 100, 100);
        drawCircles(x + diameter / 4, y, diameter / 4);
        fill(random(365), 100, 100);
        drawCircles(x - diameter / 4, y, diameter / 4);
        drawCircles(x, y + diameter / 4, diameter / 4);
        drawCircles(x, y - diameter / 4, diameter / 4);
        
    }

    else if(diameter > 10){
        drawCircles(x, y, diameter);
        drawCircles(x, y, diameter);
        



    }
    else{
        console.log(count); 

    }
    

}



function drawBranches(l){
    count++;

    strokeWeight(1 + count * 0.1);
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
      drawBranches(l);
      pop();
      console.log(count);
    } 
    
}

    

