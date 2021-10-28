let username = document.getElementById("username");
let password = document.getElementById("password");
let outputtxt = document.getElementById("output");

function check_Password(){
    username=username.value
    password=password.value

    if(username == "Username" && password == "Password"){
        output.innerHTML = "Welcome: " + username;
    }else{
        output.innerHTML = "Wrong information";
    }
}
