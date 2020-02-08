function setup() {
  createCanvas(400, 400);
}


function draw()
{
  
  background(80, 20,109);
  let xpos=50;
  let ypos = 50;
  let w = random(5,300);
  let h = random(300,5);
  //xpos = random (0,width);
 //ypos = random (0,50);
rect (xpos, ypos,w,h)
    
 let r = random(255); // r is a random number between 0 - 255
 let g = random(0,150); // g is a random number betwen 100 - 200
 let b = random(150,200); // b is a random number between 0 - 100
 let a = random(200,255); // a is a random number between 200 - 255
  
  stroke(100);
  fill(r, b, g, a);
  }
