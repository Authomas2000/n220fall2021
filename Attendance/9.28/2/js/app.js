var count = 10;
var frames = 0;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  frames++

  if (frames % 10 == 0) {
    if(frames < 110)
    count = count - 1;
    console.log(count);
  }
}