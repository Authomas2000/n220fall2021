function setup (){
    createCanvas(300,300)
}

function setup (){
    createCanvas(300,300)
}

function draw() {
    background(100);

    noFill();

    //For Loop
    for(var i = 0; i < 10; i++) {
        for(var bottom = 0; bottom < 12; bottom++){
            rect(bottom*10, bottom*10, 10, 10);
        }
    }
}