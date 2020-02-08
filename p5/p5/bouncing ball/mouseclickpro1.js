function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  frameRate(20);
  let a = random(0, 255);
  // let b=random(150,160);
  // let c= random(180,200);
  let b = 160;
  let c = 200;
  fill(a, b, c);
  stroke(0);
  strokeWeight(2);
  let s = 20;
  for (let i = s/2; i < width; i += s) {
    for (let j = s/2; j < height; j += s) {
    // for (let i = s / 2; i < width; i += s) {
    // for (let j = s / 2; j < height; j += s) {
      let d = dist(mouseX, mouseY, i, j);
      ellipse(i, j, d);
    }
  }
}