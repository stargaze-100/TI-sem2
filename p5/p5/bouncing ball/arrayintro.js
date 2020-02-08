let arr = [];
function setup() {
  createCanvas(400, 400);
  for (i=0; i<10; i++)
  {
    arr[i] = random (0,255);
  }
}

function draw() {
  background(220);
  for (let i=0; i<10; i++)
  {
    print (arr[i]);
  }
}
