let img;

function preload() {
  img = loadImage('7a51465647f34c10911b0c61340029a6-2.jpg');
}

function setup() {
  img.resize(0, 400);
  createCanvas(img.width, img.height);
  image(img, 0, 0);
}

function draw() {
  //background(220);
  let x = random(0, width);
  let y = random(0, height);
  let color = img.get(x, y);
  // fill(color);
  // noStroke(10);
  // rect(x,y,20,20);
  stroke(color);
  noFill();
  ellipse(x,y,60,80);
  fill(color);
  noStroke();
  rect(x,y,2,80);
}