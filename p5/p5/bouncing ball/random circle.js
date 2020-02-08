let p;

function setup() {
  
  createCanvas(400, 400);
  p = new Particle();
}

function draw() {
  background(220);
  ellipse(p.posX, p.posY, 100);
  // ellipse(q.posX, q.posY, 50);
}
class Particle {
  constructor() {
    this.posX = (random(1, width));
    this.posY = (random(1, height));
  }
}