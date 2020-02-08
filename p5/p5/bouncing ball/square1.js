function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  fill(100, 128);
  drawSq(width / 2, height / 2, width);
}

// function draw() {
//   background(220);
// }
function drawSq(x0, y0, side) {
  if (side >= 3) 
  {
      rect(x0, y0, side, side);
    drawSq(x0 - side / 3, y0 - side / 3, side / 3);
 
}
}