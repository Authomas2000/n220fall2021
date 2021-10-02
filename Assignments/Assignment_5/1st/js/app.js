let bigDiv = document.getElementById("Div");

bigDiv.style.backgroundColor = "#00ff77";
var x = 100;
var y = 100;
bigDiv.style.width = x + "px";
bigDiv.style.height = y + "px";

function expandDiv() {
    x = x * 1.1;
    y = y * 1.1;
    bigDiv.style.width = x + "px";
    bigDiv.style.height = y + "px";
}