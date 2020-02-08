let img;

function preload() {
  img = loadImage('blackgirl.jpg');
}

function setup() {
  img.resize(400, 400);
  createCanvas(img.width, img.height);
  //image(img, 0, 0);
}

function draw() {
  //background(220);
  let x = random(0, width);
  let y = random(0, height);
  fill(0);
  //triangle(x, y, 10, 10, 2, 1);
  line(x, y, 1, 1);
  line(y, x, 1, 1);
  let color = img.get(x, y);
  fill(color);
  stroke(10);
  rect(x, y, 60, 3);

  fill(color);
  stroke(10);
  rect(y, x, 3, 60);
}

//function mouseClicked() {
//   let a = 255;
//   let b = random(200,255);
//   let c = random(120,189);
//   fill(a, b, c);

//   fill(255);
//   triangle(mouseX, mouseY, 10, 20, 1, 1);
//}

function mouseClicked() {
  noFill();
  strokeWeight(3);
  rect(mouseX, mouseY, 1000, 1000);
}

// function polygon(x, y, radius, npoints) {
//   let angle = TWO_PI / npoints;
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     let sy = y + cos(a) * radius;
//     let sx = x + sin(a) * radius;
//     vertex(sx, sy);
//     //ellipse(sx, sy, 12, 18);
//   }
//   endShape(CLOSE);
// }