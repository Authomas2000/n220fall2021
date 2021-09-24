let y = [];
let x = [];

function setup() {
    createCanvas(800, 800);

}

function draw() {

    background(255,255,255)

    if (mouseIsPressed) {
        fill("#4d4dc9");
        circle(mouseX, mouseY, 40);
        append(x,mouseX);
        append(y,mouseY);
        console.log(y);
    }
    for(let i = 0; i < y.length; i++){
        y[i] += 5;
       circle(x[i], y[i], 40)
    }
}