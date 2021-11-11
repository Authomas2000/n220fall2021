let message = document.getElementById("message");
var array = [];
var average = 0; 
var total = 0;

//function to put input code to array and display
function Calculate() {
  let string = document.getElementById("string");

  array = string.value.split(",");

  for( let i = 0; i < array.length; i++){
    char = array[i];
    char = parseInt(char);
    total += char;
    average += 1;
  }

  average = total / average;

  message.innerHTML = "Total: " + total + "<br>" + "Average: " + average;
  total = 0;
  average = 0; 
  string.value = "";
}