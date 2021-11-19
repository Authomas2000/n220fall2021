let Div1Color = document.getElementById("Div1").style.backgroundColor = "gray";
let Div2Color = document.getElementById("Div2").style.backgroundColor = "gray";
let Div3Color = document.getElementById("Div3").style.backgroundColor = "gray";
let Divs = document.getElementById("Divs");
Divs.addEventListener("color", ChangeColor);

//function to put input code to array and display
function ChangeColor(event) {
  if (event.target.id == "Div1" && event.target.style.backgroundColor == "gray"){
    event.target.style.backgroundColor = "darkred";
  }else if (event.target.id == "Div2" && event.target.style.backgroundColor == "gray"){
    event.target.style.backgroundColor = "green";
  }else if (event.target.id == "Div3" && event.target.style.backgroundColor == "gray"){
    event.target.style.backgroundColor = "blue";
  }else{
    event.target.style.backgroundColor = "gray";
  }
}