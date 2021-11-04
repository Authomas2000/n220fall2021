let message = document.getElementById("message");

//function to check vowel
function check_hash(letter) {
  if (letter == "#"){
    return true;
  } else {
    return false;
  }
}

//function to remove vowel
function remove_vowels() {
  let string = document.getElementById("string");
  newString = "";

  for (let i = 0; i < string.value.length; i++) {
    let char = string.value[i];

    let bool = check_hash(char);

    if (bool == false) {
      newString += char;
    }
  }
  message.innerHTML = newString;
}
