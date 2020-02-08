let btClick;

function setup() {
  createCanvas(400, 400);
  btClick = createButton("Click me!"); //DOM library
}

function draw() {
  background(220, 10);
  btClick.mouseClicked(clickFn);
}

function clickFn() {
  text("Got clicked,yay", random(0, width), (height / 2));
}