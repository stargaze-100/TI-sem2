function setup() {
  createCanvas(400, 400);
   series(500);
}
// function draw()
// {
  
// }
function series(n) {
  print(n);
  ellipse (0,height/2, n,n);
  if (n>5)
  {
  series(n*0.5);
  
}
}
