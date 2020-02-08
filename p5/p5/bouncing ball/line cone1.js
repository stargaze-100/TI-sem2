function setup() {
  createCanvas(600, 600);

   // background(0);
  // stroke(250, 30, 50);
}

function draw() {

  background(0);
  stroke(250, 30, 50);
  noFill();
  translate(0, height / 2, random(2, 30));
  //beginShape();
  for (var j = 0; j < 600; j++) {
    //fill(255);
    //x=random(-100,width+100);
    //probability = j*0.04;   
    //y=random((1-probability)*height,height);

    var x = cos(radians(j)+20) * 60;;
    // var y = sin(radians(j)) * 200;
    var y = sin(radians(j)+20) * 60;

    // dx = (y / 5) * 6;
    // dy = (y / 3) * 3;
    // line(mouseX * 1.1, mouseY, (x + dx) * 3, (y + dy) * 1.5);
    line(mouseX, mouseY, x * 3, y * 3);

    //vertex(x*0.5,y);
  }
  //endShape(CLOSE);
}