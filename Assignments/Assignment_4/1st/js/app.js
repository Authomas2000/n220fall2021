let Colors = ["#3275a8", "#9e32a8", "#c43939"];

function setup() {
    createCanvas(400, 400);
  
}

function draw() {
    
    for( let i = 0; i < Colors.length; i++) {
      fill(Colors[i]);
      rect(i* 40, 40, 40, 40);
    }
}