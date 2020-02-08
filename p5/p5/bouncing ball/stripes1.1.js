function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(89, 70, 39);
  noStroke();
  for (let i = 0; i < width; i += 20) {
    fill(random(0, 255));
    rect(0, i, width, 10);

    let r = random(255); 
    let g = random(100, 200); 
    let b = random(100); 
    let a = random(200, 255); 
    noStroke();
    fill(r, g, b, a);
    rect(i, 0, 10, height);
  }
}