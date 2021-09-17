function setup (){
    createCanvas(300,300)
}

function draw() {
    background(100);

    noFill();

    //For Loop
    for(var i = 0; i < 10; i++) {
        for(var bottom = 0; bottom < 4; bottom++){
            for(var Middle = 0; Middle < 3; Middle++){
            rect(bottom*10, 150, 10, 10);
            }
        }
    }
}