let p;
let q;

function setup() {

  createCanvas(400, 400);
  p = new Particle();
  q = new Particle();
}

function draw() {
  background(30, 10, 60);
  p.display();
  q.display();
  p.update();
  q.update();

}
class Particle {
  constructor() {
    this.posX = (random(0, width));
    this.posY = (random(0, height));
    this.rad = (random(20, 100));
    this.velX = random();
    this.velY = random();
  }


  display() {
    ellipse(this.posX, this.posY, this.rad);
    fill(29, 300, 79);
  }
  update() {
    this.posX += this.velX;
    this.posY += this.velY;
  }
}
