let H = 0
let M = 150

function setup (){
    createCanvas(600,300)
}

function draw() {
    background(100);

    //For Loop
    for(var i = 0; i < 25; i++) { 
        if(i<2){
            fill("#f7f2d2")
            circle(i*24+12, 150, 12);
        }else if(i/3 == 1) {
            fill("#a83e40")
            circle(i*24+12, 150, 12);
        }else if(i/5 == 1) {
            fill("#a83e40")
            circle(i*24+12, 150, 12);
        }else if(i/5 == 1) {
            fill("#a83e40")
            circle(i*24+12, 150, 12);
        }
    }
}