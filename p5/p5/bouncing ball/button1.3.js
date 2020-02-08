let btClick;
let slSize;
//let slcolor;

function setup() {
  createCanvas(400, 400);
  btClick = createButton("Click me!"); //DOM library
  slSize = createSlider(5, 500);
  // slcolor = createSlider(5, 45);
}

function draw() {
  let txt = slSize.value();
  background(0);
  let c = random(0, 255);
  let b = random(150, 200);
  let a = random(200, 255);
  fill(b, c, a);
  // fill(txt * 5);
  btClick.mouseClicked(clickFn);

  // let txt = slSize.value();
  textSize(txt);
  //let c = random(0, 100);
  //let b = fill(a, 100, 200);
  text("Got clicked,yay", random(0, width), (height));
}

function clickFn() {
  // text("Got clicked,yay", random(0, width), (height / 2));
}