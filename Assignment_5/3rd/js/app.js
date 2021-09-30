let div1 = document.getElementById("Div1");
let div2 = document.getElementById("Div2");
let div3 = document.getElementById("Div3");
let bDiv1 = document.getElementById("BDiv1");
let bDiv2 = document.getElementById("BDiv2");
let bDiv3 = document.getElementById("BDiv3");
let message = document.getElementById("Message");

var win = 0; //variable to see if player has won.
var lose = 0; //variable to see if player has lost.

//Good squares 
div1.style.backgroundColor = "#000dff";
div2.style.backgroundColor = "#000dff";
div3.style.backgroundColor = "#000dff";
div1.style.margin = "2px";
div2.style.margin = "2px";
div3.style.margin = "2px";
div1.style.width = "100px";
div1.style.height = "100px";
div2.style.width = "100px";
div2.style.height = "100px";
div3.style.width = "100px";
div3.style.height = "100px";
div1Count = 0;
div2Count = 0;
div3Count = 0;

//Bad Squares
bDiv1.style.backgroundColor = "#ff0000";
bDiv2.style.backgroundColor = "#ff0000";
bDiv3.style.backgroundColor = "#ff0000";
bDiv1.style.margin = "2px";
bDiv2.style.margin = "2px";
bDiv3.style.margin = "2px";
bDiv1.style.width = "100px";
bDiv1.style.height = "100px";
bDiv2.style.width = "100px";
bDiv2.style.height = "100px";
bDiv3.style.width = "100px";
bDiv3.style.height = "100px";
div1Count = 0;
div2Count = 0;
div3Count = 0;

//function to set 1st good square black, and set count to 1, when moused over.
function change_to_black1() {
    div1.style.backgroundColor = "#000000";
    div1Count = 1;

    checkWin();

    setTimeout(function () {//reset color and count
        if (win == 1) {
        } else {
            div1.style.backgroundColor = "#000dff";
            div1Count = 0;
        }
    }, 2000);

}

//function to set 2nd good square black, and set count to 1, when moused over.
function change_to_black2() {
    div2.style.backgroundColor = "#000000";
    div2Count = 1;

    checkWin();

    setTimeout(function () {//reset color and count
        if (win == 1) {
        } else {
            div2.style.backgroundColor = "#000dff";
            div2Count = 0;
        }
    }, 2000);

}

//function to set 3rd good square black, and set count to 1, when moused over.
function change_to_black3() {
    div3.style.backgroundColor = "#000000";
    div3Count = 1;

    checkWin();

    setTimeout(function () {//reset color and count
        if (win == 1) {
        } else {
            div3.style.backgroundColor = "#000dff";
            div3Count = 0;
        }
    }, 2000);
}

//Set to black and then reset
function setBlack() {
    div1.style.backgroundColor = "#000000";
    div2.style.backgroundColor = "#000000";
    div3.style.backgroundColor = "#000000";
    bDiv1.style.backgroundColor = "#000000";
    bDiv2.style.backgroundColor = "#000000";
    bDiv3.style.backgroundColor = "#000000";

    setTimeout(function () {//reset color
        div1.style.backgroundColor = "#000dff";
        div2.style.backgroundColor = "#000dff";
        div3.style.backgroundColor = "#000dff";
        bDiv1.style.backgroundColor = "#ff0000";
        bDiv2.style.backgroundColor = "#ff0000";
        bDiv3.style.backgroundColor = "#ff0000";
    }, 2000);
}

//function to check if players have touched a red square, reset the screen and display a "you lost" message.
function checkLose() {
    if(win == 0){
        message.innerHTML = "You Lose";
        lose = 1;
        setBlack();
    
        setTimeout(function () {
            message.innerHTML = "";
            lose = 0;
        }, 2000);
    }
}

//function to check if players have touched all blue squares,Reset the screen, set win value and display a "you win" message.
function checkWin() {
    if ((div1Count == 1) && (div2Count == 1) && (div3Count == 1) && (lose == 0)) {
        win = 1;
        message.innerHTML = "You Win";
        setBlack();
    
        setTimeout(function () {
            message.innerHTML = "";
            win = 0;
            div1Count = 0;
            div2Count = 0;
            div3Count = 0;
        }, 2000);
    }
}

