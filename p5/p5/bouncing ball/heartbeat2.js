let x0, y0;
let step;

function setup() {
  createCanvas(400, 400);
  x0 = 0;
  step = 5;
}

function draw() {
  //background(220);
  let y = random(0, +step*100);
  x0+=1;
  x0++;

  line(x0, 0,x0,y);
}