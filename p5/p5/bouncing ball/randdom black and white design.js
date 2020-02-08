let value = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  drawSq(width / 2, height / 2, width);
}

function draw() {
  fill(value);
  rect(200, 200, 130, 130);
}

function drawSq(x0, y0, side) {
  if (side >= 3) {
    rect(x0, y0, side, side);
    fill(random(0, 255));
    drawSq(x0 + side / 3, y0 + side / 3, side / 3);
    drawSq(x0 - side / 3, y0 - side / 3, side / 3);
    //  drawSq(x0 - side / 3, y0 + side / 3, side / 3);
    // drawSq(x0 + side / 3, y0 - side / 3, side / 3);
    drawSq(x0 - side / 3, y0, side / 3);
    drawSq(y0 - side / 3, x0, side / 3);

    drawSq(x0, y0 - side / 3, side / 3);
    drawSq(x0 + side / 3, y0, side / 3);
    drawSq(x0, y0 + side / 3, side / 3);

  }
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

// rect(x0, y0, side, side);
//    drawSq(x0 - side / 3, y0 - side / 3, side / 3);
//    drawSq(x0 + side / 3, y0 - side / 3, side / 3);
//    drawSq(x0 - side / 3, y0 + side / 3, side / 3);
//    drawSq(x0 + side / 3, y0 + side / 3, side / 3);
//    drawSq(x0 - side / 3, y0, side / 3);
//    drawSq(x0, y0 - side / 3, side / 3);
//    drawSq(x0 + side / 3, y0, side / 3);
//    drawSq(x0, y0 + side / 3, side / 3);