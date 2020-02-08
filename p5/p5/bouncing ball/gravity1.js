let p;

function setup() {
  createCanvas(400, 400);
  p = new particle();
  // textStyle(BOLD);
}

function draw() {
  background(70, 20,90);
  // fill(0);
  // stroke(255);
  p.display();
  p.update();
}

class particle {
  constructor() {
    this.posX = random(0, width);
    this.posY = random(0, height);
    this.velX = random();
    this.velY = random();
    this.accX = 0.5;
    this.accY = 0.5;
  }

  update() {
    this.posX += this.velX;
    this.posY += this.velY;
    if (this.posX > width) {
      this.velX = -this.velX;
    }

    if (this.posX < 0) {
      this.velX = -this.velX;
    }

    if (this.posY > height) {
      this.posY = 0;
    }

    if (this.posY < 0) {
      this.posY = height;
    }
    this.velX+=this.accX;
    this.velY+=this.accY;
  }

  display() {
    fill(200, 67, 50);
    // stroke(89,80,70);
    // rect(this.posX, this.posY, 10, 10);
    textSize(32);
    text ("hi sisters",this.posX,this.posY);
    
  }
}