let t;

function setup() {
  createCanvas(400, 400);
  t = random(0, 255);

}


function draw() {

  background(300, 50, 71);
  // let xpos = 50;
  // let ypos = 50;
  let w = 50;
  let h = 100;
  xpos = random(0, width);
  ypos = random(0, height);
  triangle(xpos, ypos, w, h, 90, 90);
  rect(xpos, ypos, w, h);
  ellipse(xpos, ypos, w, h);
  frameRate(100);
  fill(random() * 255);
  stroke(10, 40, 50);
  // fill(t);
}

function mouseClicked() {
  t = random(0, 255);
}