var xPos = 0;

function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(200, 237, 108)

    //Circle
    if(xPos == 800){
        xPos = 0
    }
    xPos = xPos + 5;
    circle(xPos, 30, 30)
}
