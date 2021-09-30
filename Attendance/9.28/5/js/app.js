let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ]
var frames = 0;
var count = 0;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  frames++;
  if(frames == 1) {
    for(let i = 0; i < words.length; i++) {
      console.log(words[i], "yeah!");
    }
  }
}