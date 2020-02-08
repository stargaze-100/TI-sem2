let bump;
let ran;
function Preload() {
  soundFormats("wav");
  bump = loadSound("gibbrish.wav");
}

function setup() {
  createCanvas(400, 400);
  ran = false;
}

function draw() {
  background(220);
  if(ran == true)
  {
    let r = int(random(0, bump.length-1));
    bump.jump(r,1);
  }
}

function keypressed()
{
  if(key == "a")
     {
       bump.play();
     }
  if(key == "s")
     {
       bump.stop();
     }
  if(key == "r")
     {
       bump.reverseBuffer();
       bump.play();
     }
}

function mouseClicked() {
ran = !ran;
}