let buttons = document.getElementById("buttons");
let Div = document.getElementById("Div")
buttons.addEventListener("color", ChangeColor);
var redRGB = 1;
var greenRGB = 1;
var blueRGB = 1;

//function to put input code to array and display
function ChangeColor(event) {
  //Check if red and what amaount
  if (event.target.id == "red1"){
    redRGB += 1;
  }
  if(event.target.id == "red5"){
    redRGB += 5;
  }
  if(event.target.id == "red10"){
    redRGB += 10;
  }

  //Check if green and what amaount
  if (event.target.id == "green1"){
    greenRGB += 1;
  }
  if(event.target.id == "green5"){
    greenRGB += 5;
  }
  if(event.target.id == "green10"){
    greenRGB += 10;
  }

  //Check if blue and what amaount
  if (event.target.id == "blue1"){
    blueRGB += 1;
  }
  if(event.target.id == "blue5"){
    blueRGB += 5;
  }
  if(event.target.id == "blue10"){
    blueRGB += 10;
  }

  //Chnage divs color
  Div.style.backgroundColor = ["rgb(",redRGB,",",greenRGB,",",blueRGB,")"].join("");
}
