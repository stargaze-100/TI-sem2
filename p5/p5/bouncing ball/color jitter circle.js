let r, deg;

function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(255, 78);
  r = mouseX;
  stroke(25, 465, 110);
  fill(25, 465, 110);
  deg = 90;
  for (let i = 0; i < 5; i++) 
  {
    myRectangle(r * i, i, 180);
  }
}

function myRectangle(r, i, deg) {
   for (let t = 0; t < 90; t = t + 2) 
  {
    //fill(i + 50);
    fill(91, 90, 109)
    d = radians(t);
    let x = width / 2 + r * sin(d) + random(0, -10);
    let y = height / 2 + r * cos(d) + random(0, -10);
    rect(x, y, random(0, 15), random(0, 15));
  }
   
}

