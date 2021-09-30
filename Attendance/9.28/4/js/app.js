let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ]
var frames = 0;
var count = 5;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  frames++;
  if(frames == 1) {
    for(let i = 0; i < words.length; i++) {
      count = count - 1;
      console.log(words[count]);
    }
  }
}