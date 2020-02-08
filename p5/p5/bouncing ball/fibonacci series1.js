function setup() {
  createCanvas(400, 400);
   sum1(0,1);
}
function draw()
{
  
}
function sum1(a,b) {
  print(b);
  if (b<100)
  {
  sum1(b,a+b);
  
}
}
