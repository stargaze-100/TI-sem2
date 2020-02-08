function setup() {
  createCanvas(400, 400);
  p1=new students();
  p2=new students();
  p3=new students();
  
  p1.display();
  p2.display();
  p3.display();
  
}

function draw() {
  background(220);
}

class students {

  constructor() {
    this.name = "alphabeta";
    this.address = 45;
    this.number = int(random(0, 100));
  }
  display() {
    print("name is", this.name);
    print("address is", this.address);
    print("nroll no. is", this.number);
  }
}
