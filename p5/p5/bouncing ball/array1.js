let arr = [];
function setup() {
  createCanvas(400, 400);
  for (i=0; i<10; i++)
  {
  arr[i] = random (0,255);
    //arr[i] = random (250);
    print (arr[i]);
  }
}

function draw() {
  background(220);
  noStroke();
  for (let i=0; i<10; i++)
  {
    fill(arr[i]);
    ellipse (50 * i+30, height/2, arr[i] * 0.5, arr [i] * 0.5);
  }
}
