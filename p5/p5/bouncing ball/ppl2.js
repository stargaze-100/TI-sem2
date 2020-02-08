let p = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 200; i++) {
    p[i] = new student(i); //value of i is passed to a in constructor
  }

}

function draw() {
  background(220);
  for (i=0; i<p.length; i++)
  {
    p[i].display();
  }
  // let r = int(random(0, p.length - 1));
  // p[r].display();
}

class student {

  constructor(a) {
    this.name = "alphabeta";
    this.address = a;
    this.number = int(random(0, 100));
  }

  display() {
    print("name is", this.name);
    print("address is", this.address);
    print("nroll no. is", this.number);
  }
}