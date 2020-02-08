function setup() {
  createCanvas(600, 600);

  // background(0);
  // stroke(250, 30, 50);
}

function draw() {

  background(0);
  // noFill();
  translate(0, height / 2, random(2, 30));
  //beginShape();
  for (var j = 0; j < 600; j++) {
    //fill(255);
    //x=random(-100,width+100);
    //probability = j*0.04;   
    //y=random((1-probability)*height,height);

    var x = cos(radians(j) + 20) * 50;
    var y = sin(radians(j) + 20) * 50;
    // let a = random(0, 199);
    // let b = random(200, 150);
    // let c = random(251,255);
    let a = random(100, 199);
    let b = random(200, 150);
    let c = random(251, 255);
    stroke(a, b, c, 50);
    strokeWeight(10);
    line(mouseX, mouseY, x * 15, y * 10);

    //vertex(x*0.5,y);
  }
  //endShape(CLOSE);
}