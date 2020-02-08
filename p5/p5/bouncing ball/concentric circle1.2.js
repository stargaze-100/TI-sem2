function setup() {
  createCanvas(400, 400);
  background (130,90,60);
  fill (128, 120);
   series(500);
}

function series(n) {
  print(n);
  ellipse (0,height/2, n,n);
  ellipse (0,height/2, n,n);
  if (n>5)
  {
  series(n*0.5);
  
}
}
