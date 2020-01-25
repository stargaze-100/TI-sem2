let p,q;
function setup() {
  createCanvas(400, 400);
  p = 0;
  q = 100
}
function draw() {
  background(220)
  let w = 100;
  let h = 80;
  rect (p,height/2-h/2,w,h);
  p = p+10;
  
  if(p>width)
  {
    rect (q,height/2-h/2,w,h);
    q = q-10;
    
  }
}
  