function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,110,160);

  for (let i=0; i<10; i++)
  {
    fill(128,70, 160);
    //stroke(0,90,2);
    strokeWeight(3);
    ellipse (100+50*i , 100, 80, 80);
    print (i, 100+50*i);
  }
}
