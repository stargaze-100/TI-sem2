let c,v;
function setup() {
  createCanvas(400, 400);
  c=0;
  v=1;
}

function draw() {
  //background(220,110,160);
  if (mouseIsPressed)
  {
    fill(c);
  }
  else
  {
    fill(255 - c);
    
  }
  ellipse (mouseX, mouseY,80, 80);
  c = c + v;
  if(c > 255)
    v = -v;
    c = c + v;

}