function setup() {
  createCanvas(400, 400);
  //background(0);
 // colorMode(HSB);
  for (let i = 0; i < height; i = i + 19) {
    for (let j = 0; j < width; j = j + 2) {
      let r = map(i, 0, width, 0, 20);
      let q = map(j, 0, height, 0, 360);
      noStroke();
      fill(q,100,100);
      ellipse(i, j, r, r);
    }
  }
}

function draw() {
  //background(220);
}