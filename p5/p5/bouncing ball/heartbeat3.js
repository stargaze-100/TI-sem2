let x0, y0;
let step, t;

function setup() {
  createCanvas(400, 400);
  x0 = 0;
  step = 5;
  t = 0.1;
  t0 = 5;
}

function draw() {
  //background(220);
  let y = random(0, +step * 100);
  x0 += 5;
  line(x0, 0, x0, y);

  let n = noise(t) + 100;
 // let y = random(0, +step * 10); 
  line(x0, height / 2, x0, height / 2 + n * 100);
  t0 = t0 + t;
}