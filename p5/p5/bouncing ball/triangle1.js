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
    this.rad = (random(400, 400));
    this.velX = random();
    this.velY = random();
  }


  display() {
    triangle(this.posX, this.posY, this.rad,45,60,30);
     fill(30, 170, 49);
     triangle(this.posX, this.posY, this.rad,20,30,90);
    fill(200, 300, 79);
     triangle(this.posX, this.posY, this.rad,190,20,140);
    fill(199, 30, 7);
     triangle(this.posX, this.posY, this.rad,40,45,60);
    fill(40, 40, 7);
     triangle(this.posX, this.posY, this.rad,80,30,200);
    fill(80, 40, 210);
  }
  update() {
    this.posX += this.velX;
    this.posY += this.velY;
    if (this.posX > 400)
      this.velY--;
    if (this.posX > 400)
      this.velX--;
    if (this.posY < 0)
      this.posY++;
    if (this.posX < 0)
      this.posX++;
  }
}
