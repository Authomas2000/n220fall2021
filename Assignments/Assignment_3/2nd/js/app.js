let B = 40
let M = 150

function setup (){
    createCanvas(300,300)
}

function draw() {
    background(100);

    fill("#f7f2d2")

    //For Loop
    for(var i = 0; i < 11; i++) { 
        if(i<=3){
            B = B + 20
            console.log(B)
        }else if (i <= 6){
            B = B - 20
            M = 130
        }else if (i == 7){
            B = 60
            M = 110
        }else if (i == 8){
            B = 80
            M = 110
        }else if (i == 9){
            B = 60
            M = 90
        }

        rect(B, M, 20, 20);
    }
}