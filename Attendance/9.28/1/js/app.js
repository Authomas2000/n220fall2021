var count = 0;
var frames = 0;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  frames++

  if (frames % 10 == 0) {
    if(frames < 110)
    count++;
    console.log(count);
  }
}