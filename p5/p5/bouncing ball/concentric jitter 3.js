let r, deg;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  // background(255, 45);
  r = mouseX;
  noStroke();
  fill(7, 500);
  deg = 360;
  for (let i = 0; i < 5; i++) {
    myCircle(r * i, i, 180);
  }
}

function myCircle(r, i, deg) {
  for (let t = 0; t < 360; t = t + 2) {
    fill(i + 50)
    d = radians(t);
    let x = width / 2 + r * sin(d) + random(0, 15);
    let y = height / 2 + r * cos(d) + random(0, 15);
    ellipse(x, y, random(0, 10), random(0, 10));
    //ellipse(x, x, random(0, 10), random(0, 10));
    ellipse(y, y, random(0, 10), random(0, 10));
   // ellipse(y, x, random(0, 10), random(0, 10));
  }
}