let img;

function preload() {
  img = loadImage('images (8).jpg');
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
  fill(color);
  stroke(10);
  ellipse(x, y, 50, 50);
  fill(color);
  stroke(10);
  rect(x,y,50,50);
}
