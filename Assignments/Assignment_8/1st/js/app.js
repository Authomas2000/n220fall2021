let number = document.getElementById('number');
let messageDiv = document.getElementById("messageDiv");

function check_number(num){

    if(num % 7 == 0){
        return true;
    }else{
        return false;
    }
}

function result(){
    bool = check_number(number.value);

    if (bool == true){
        messageDiv.innerHTML = number.value + " is divisable by 7";
    }else{
        messageDiv.innerHTML = number.value + " is not divisable by 7";
    }
}