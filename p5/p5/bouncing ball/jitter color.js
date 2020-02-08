let p = [];
let q;
let val = 0;

function setup() {

  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    p[i] = new Particle();
  }
}

function draw() {
  background(30, 10, 60);

  for (let i = 0; i < 10; i++) {
    p[i].display();
  }
}

class Particle {
  constructor() {
    this.posX = (random(0, width));
    this.posY = (random(0, height));
    this.rad = (random(10, 100));
    this.velX = random();
    this.velY = random();
  }


  display() {
    ellipse(this.posX, this.posY, this.rad);
    let a = 190;
    let b = random(0, 189);
    let c = random(191, 254);
    let d = 255;
    fill(a, b, c, d);
  }
}

