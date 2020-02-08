let x0, y0;
let step;

function setup() {
  createCanvas(400, 400);
  x0 = 0;
  step = 5;
}

function draw() {
  //background(220);
  let y = random(-step, +step);
  x0++;

  line(x0, 2 * height / 3, x0, 2 * height / 3 + y * 10);
}
