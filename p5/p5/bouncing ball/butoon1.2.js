let btClick;
let slSize;

function setup() {
  createCanvas(400, 400);
  btClick = createButton("Click me!"); //DOM library
  slSize = createSlider(5, 45);
}

function draw() {
  background(220, 10);
  btClick.mouseClicked(clickFn);
  let txt = slSize.value();
  textSize(txt);
}

function clickFn() {
  text("Got clicked,yay", random(0, width), (height / 2));
}