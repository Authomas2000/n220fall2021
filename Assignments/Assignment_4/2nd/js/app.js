let y = [];
let frames = 0

function setup() {
    createCanvas(800, 800);

}

function draw() {

    frames++

    background(255,255,255)


    if (frames % 10 == 0) {
        fill("#4d4dc9");
        y[(frames / 10) - 1] = 0;
        circle(200, y[(frames / 10) - 1], 40);
        console.log("ten frames!");
    }
    for(let i = 0; i < y.length; i++){
        y[i] += 5;
        circle(200, y[i], 40)
    }
}