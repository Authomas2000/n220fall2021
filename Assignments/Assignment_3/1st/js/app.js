function setup (){
    createCanvas(300,300)
}

function draw() {
    background(100);

    noFill();

    //For Loop
    for(var i = 0; i < 30; i++) {

        circle(150, 150, i * 5);
    }
}