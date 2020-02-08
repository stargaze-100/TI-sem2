 
 function setup() {
  createCanvas(400, 400);
}


function draw()
{
  
  background(20, 200,69);
  let xpos=50;
  let ypos = 100;
  let w = random(1,180);
  let h = random(200,5);
  //xpos = random (0,width);
 //ypos = random (0,50);
rect (xpos, ypos,w,h)
 fill (random(0,255));
}
