var r;
var g;
var b;
var a;


function setup() { 
  createCanvas(400, 400);
  rectMode(CENTER);
} 

function draw() { 
   background(400,400);
  r = random(255); 
  g = random(100,250);
  b = random(100);
  a = random(250,255);
  noStroke();
  fill(r, g, b, a);
  rect(200,200,400,400);
  fill(random(0,255));
  rect(200, 200, 90, 90);
}