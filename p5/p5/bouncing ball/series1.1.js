function setup() {
  createCanvas(400, 400);
   sum1(5);
}

function draw()
{
  background(220);
}

function sum1(n) {
  print(n);
  if(n>0)
  {
    //let k=n-1;
    sum1(n-1)
  }
}