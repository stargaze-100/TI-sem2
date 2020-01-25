 
  fill(128);
  noStroke();
  rect(p,height/2-h/2,w,h)
  
  //fill(255);
  //nofill();
  noFill();
  stroke(0,90,2);
  strokeWeight(5);
  rect(width/2-w/2,p,w,h);
  
  p=p+1;
  
  if(p>width)
  {
    l=-l;
  }
  if(p<0)
  {
    l=-l;
  }
  
}