 
  let t;
  function setup()
  {
    createCanvas(400, 400);
    t = random(0,255);
  
  }
  
  
  function draw()
  {
    
    background(300, 80, 71);
    let xpos=50;
    let ypos = 100;
    let w=150;
    let h=100;
    //xpos = random (0,width);
   //ypos = random (0,50);
  rect (xpos, ypos,w,h);
   //fill (random(0,255));
    fill(t);
  }
  function mouseClicked()
  {
    t=random(0,255);
  }
  