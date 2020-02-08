let x0, y0, z0;
let step, t;

function setup() {
  frameRate(100);
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
  x0 = 0;
  y0 = 0;
  z0 = 0;
  step = 5;
  t = 0.05;

}


// function opacity() {
//   let a= random(0, 100);
//   let b= random(100, 180);
//   let c= random(180, 255);
//   fill(c, b, a);
//   ellipse(random(height, 0), random(0, width), random(10, 70), random(10, 70));
// }

function draw() {

  for (let i = 0; i < height; i = i + step) {
    for (let j = 0; j < width; j = j + step) {
      let n = noise(x0, y0, z0);
      let r = map(n, 0, 1, 0, 128);
      //fill(r, 1);
      fill(r, 230, 215);
      ellipse(i, j, step * 2, step * 2);
      x0 += t;
    }
    y0 += t;
    x0 = 0;
  }
  z0 += t;
  y0 = 0;

  stroke(random(0, 255));
  line(width, 0, height, 0);


}