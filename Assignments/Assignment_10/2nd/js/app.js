let question = document.getElementById("question");
let buttons = document.getElementById("buttons");
buttons.addEventListener("text", ChangeText);

//function to put input code to array and display
function ChangeText(event) {
  if (event.target.id == "Div1"){
    question.innerHTML = "Correct! the capital is Indianapolis.";
  }else if (event.target.id == "Div2"){
    question.innerHTML = "Wrong! The capital is Indianapolis.";
  }else if (event.target.id == "Div3"){
    question.innerHTML = "Wrong! The capital is Indianapolis.";
  }else{
    event.target.style.backgroundColor = "gray";
  }
}