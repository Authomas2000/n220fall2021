let message = document.getElementById("message");
var array = [];
var tally = 0;

//function to put input to array and display
function check_words() {
  let string = document.getElementById("string");

  array = string.value.split(" ");

  for( let i = 0; i < array.length; i++){
    char = array[i];
    if(char == "clear"|| char == "water"|| char == "tires"){
      tally += 1;
    }
  }

  message.innerHTML = "There was a total of " + tally + " bad words";
  tally = 0;
  string.value = "";
}