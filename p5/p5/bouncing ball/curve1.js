let r;
function setup() {
  createCanvas(400, 400);
  let r= 150;
}

function draw() 
  {
    r = mouseX;
  background(220);
  noStroke();
   fill (0);
  for (let t=0; t<360; t++)
  {
    d= radians (t);
    let x = width/2 + t* sin(d) + random (0, 15);
    let y = height/2 + t* cos(d) + random (0, 15);
    ellipse (x, y, 5, 5);
  }
}

