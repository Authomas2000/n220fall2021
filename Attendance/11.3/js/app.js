//function to check vowel
function check_vowel(letter){
  if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" || letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"){
    return true;
  }else{
    return false;
  }
}

//function to remove vowel
function remove_vowels(string){
  newString = "";

  for (let i = 0; i < string.length; i++ ){
    let char = string[i];

    let bool = check_vowel(char);

    if(bool == false){
      newString += char;
    }
  }
  return newString;
}

let res = remove_vowels("Wind");

console.log(res);