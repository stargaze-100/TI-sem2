let x0, y0, z0;
let step, t;
//let count;

function setup() {
  frameRate(10);
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
  x0 = 0;
  y0 = 0;
  z0 = 0;
  step = 5;
  t = 0.05;
  //count=5;

}

function draw() {
  background(255);
  for (let i = 0; i < height; i = i + step) {
    for (let j = 0; j < width; j = j + step) {
      let n = noise(y0,z0);
      let r = map(n, 0, 1, 0, 128);
      let a=random(150,273);
      let b=random(10,140);
      // let a=273;
      // let b=0;
      fill(a, r, b);
      ellipse(i, j, step * 2, step * 2);
      x0 += t;
    }
    y0 += t;
    x0 = 0;
  }
  z0 += t;
  y0 = 0;
}