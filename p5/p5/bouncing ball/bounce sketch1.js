let p;

function setup() {
  createCanvas(400, 400);
  p = new particle();
  // textStyle(BOLD);
}

function draw() {
  background(10,50,90);
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
    
  }

  update() {
    this.posX += this.velX;
    this.posY += this.velY;
    if(this.posX > width)
    {
      this.velX = -this.velX;
    }
    
    if(this.posX < 0)
    {
      this.velX = -this.velX;
    }
   
    if(this.posY > height)
    {
      this.velY = -this.velY;
    }
    
     if(this.posY < 0)
    {
      this.velY = -this.velY;
    }
  }

  display() {
    fill(random(0,255));
    rect(this.posX, this.posY, 10, 100);
  }
}