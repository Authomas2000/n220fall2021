let message = document.getElementById("message");
var array = [];
var tally = 0;
var win = 0;

//function to put input code to array and display
function check_win() {
  let string = document.getElementById("string");

  array = string.value.split(",");

  for( let i = 0; i < array.length; i++){
    char = array[i];
    array[i] = parseInt(char);
    if(array[i] == 1){
      tally += 1;
    }

    if(tally == 3){
      win = 1;
    }
  }

  if (win == 1){
    message.innerHTML = "You have won!";
  }else{
    message.innerHTML = "You have lost!";
  }

  message.innerHTML = "Total: " + total + "<br>" + "Average: " + average;
  string.value = "";
}
