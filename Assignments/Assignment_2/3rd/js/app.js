var diameter = 1;

function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(200, 237, 108)

    //Circle
    if(diameter == 200){
        diameter = 1
    }
    diameter++;
    circle(400, 300, diameter)
    console.log(diameter)
}