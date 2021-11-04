let message = document.getElementById("message");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomInt(){
    let number = getRandomInt(0,10)

    message.innerHTML = "Your random number is " + number;
}
